import Component from 'ember-component';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
import { getProperties } from 'ember-metal/get';
import { debounce, later, scheduleOnce } from 'ember-runloop';
import c3 from 'c3';

export default Component.extend({
  tagName: 'div',
  classNames: ['c3-chart-component'],

  // triggered when data is updated by didUpdateAttrs
  _reload() {
    const chart = get(this, 'c3chart');

    // if data should not be appended
    // e.g. when using a pie or donut chart
    if ( get(this, 'unloadDataBeforeChange') ) {
      chart.unload();
      // default animation is 350ms
      // t/f data must by loaded after unload animation (400)
      // or chart will not properly render
      later(this, function() {
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
    // get all base c3 properties
    const chartConfig = getProperties(this,
      ['data','axis','regions','bar','pie','donut','gauge',
      'grid','legend','tooltip','subchart','zoom','point',
      'line','area','size','padding','color','transition']);

    // bind c3 chart to component's DOM element
    chartConfig.bindto = get(this, 'element');

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
        chartConfig[event] = function() {
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

  didReceiveAttrs() {
    // if DOM is not ready when component is inserted,
    // rendering issues can occur
    // t/f use 'afterRender' property to ensure
    // state readiness
    try {
      scheduleOnce('afterRender', this, this._setupc3);
    } catch(err) {
      console.log(err);
    }
  },

  didUpdateAttrs() {
    // if data proprety is dependent on async relationships,
    // animations can cause buggy renders, therefore debounce
    // component update to ensure proper visualization
    debounce(this, this._reload, 360);
  },

  willDestroyElement() {
    // execute teardown method
    this._super();
    get(this, 'c3chart').destroy();
  },
  actions: {
    toggle(dataName) {
      get(this, 'c3chart').toggle(dataName);
    }
  }
});
