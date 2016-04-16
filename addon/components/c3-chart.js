// C data-viz
import Ember from 'ember';
import c3 from 'c3';
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

    // load chart
    set(this, 'c3chart', c3.generate(chartConfig));
  },

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
