/* global c3*/
import Ember from 'ember';
const { Component, get, getProperties, set, run } = Ember;

export default Component.extend({
  tagName: 'div',
  classNames: ['c3-chart-component'],

  _reload() {
    const chart = get(this, 'c3chart');
    chart.load(
      get(this, 'data'),
      get(this, 'axis'),
      get(this, 'color')
    );
  },

  _setupc3() {
    // get c3 properties
    const chartConfig = getProperties(this, 
      ['data','axis','regions','bar','pie','donut','gauge',
      'grid','legend','tooltip','subchart','zoom','point',
      'line','area','size','padding','color','transition']);

    // bind to component DOM element
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

    // load chart
    set(this, 'c3chart', c3.generate(chartConfig));
  },

  /* use component lifecycle hooks to control rendering */

  didInsertElement() {
    // prevent premature rendering
    run.scheduleOnce('afterRender', this, this._setupc3);
  },

  didUpdateAttrs() {
    // protect against promise render issues
    run.debounce(this, this._reload, 360);
  },

  willDestroyElement() {
    this._super();
    get(this, 'c3chart').destroy();
  }
});
