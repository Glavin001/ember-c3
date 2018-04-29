import Component from '@ember/component';
import { get, set, getProperties } from '@ember/object';
import { debounce, later } from '@ember/runloop';
import c3 from 'c3';

export default Component.extend({
  tagName: 'div',
  classNames: ['c3-chart-component'],


  // triggered when data is updated by didUpdateAttrs
  _reload() {
    const chart = get(this, 'c3chart');

    // if data should not be appended
    // e.g. when using a pie or donut chart
    if (get(this, 'unloadDataBeforeChange')) {
      chart.unload();

      // default animation is 350ms
      // t/f data must by loaded after unload animation (400)
      // or chart will not properly render

      later(this, function () {
        chart.load(
          // data, axis, color are only mutable elements
          get(this, 'data'),
          get(this, 'axis'),
          get(this, 'color')
        );
      }, 400);

    } else {
      chart.load(
        get(this, 'data'),
        get(this, 'axis'),
        get(this, 'color')
      );
    }
  },

  // triggered when component added by didInsertElement
  _setupc3() {

    // assign here to make it easier to add more in the future
    let properties = ['data', 'axis', 'regions', 'bar', 'pie', 'donut', 'gauge',
      'grid', 'legend', 'tooltip', 'subchart', 'zoom', 'point',
      'line', 'area', 'size', 'padding', 'color', 'transition']

    // get base c3 properties
    const chartConfig = getProperties(this, properties);

    // bind c3 chart to component's DOM element
    chartConfig.bindto = this.element;

    // emit events to controller
    callbacks.call(this);

    function callbacks() {

      const that = this;

      const c3events = [
        'oninit',
        'onrendered',
        'onmouseover',
        'onmouseout',
        'onresize',
        'onresized'
      ];

      c3events.forEach((event) => {
        chartConfig[event] = function () {
          that.sendAction(event, that);
        };
      });
    }

    // render the initial chart
    set(this, 'c3chart', c3.generate(chartConfig));
  },

  /***
   * Component lifecycle hooks to control rendering actions
   ***/

  didInsertElement() {
    this._super(...arguments);
    this._setupc3();
  },

  didUpdateAttrs() {
    // if data proprety is dependent on async relationships,
    // animations can cause buggy renders, therefore debounce
    // component update to ensure proper visualization
    debounce(this, this._reload, 360);
  },

  // execute teardown method
  willDestroyElement() {
    this._super(...arguments);
    get(this, 'c3chart').destroy();
  }
});
