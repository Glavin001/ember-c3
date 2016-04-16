/* global c3*/
import Ember from 'ember';
const { Component, computed, get, getProperties, run } = Ember;

export default Component.extend({
  tagName: 'div',
  classNames: ['c3-chart-component'],

  properties: ['data','axis','regions','bar','pie','donut','gauge',
    'grid','legend','tooltip','subchart','zoom','point','line',
    'area','size','padding','color','transition'],

  c3chart: undefined,

  config: computed('data', 'legend', function() {
    let c = getProperties(this, ...get(this, 'properties'));
    c.bindto = this.get('element');
    return c;
  }),

  didUpdateAttrs() {
    run.debounce(this, get(this, '_render'), 50);
  },

  _render() {
    get(this, 'c3chart').load(get(this, 'data'));
  },

  didInsertElement() {
    this.set('c3chart', c3.generate(get(this, 'config')));
    get(this, '_render');
  },

  willDestroyElement() {
    this._super();
    get(this, 'c3chart').destroy();
  }
});
