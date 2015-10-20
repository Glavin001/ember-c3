import Ember from 'ember';
import c3 from 'c3';

/**
  C3 Chart component
*/
export default Ember.Component.extend({
  /**
    Element tag name
  */
  tagName: 'div',

  /**
    Element classes
  */
  classNames: ['c3-chart-component'],

  /**
    The data to display
  */
  data: {},

  /**
    Axis specifications
  */
  axis: {},

  /**
    Region specifications
  */
  regions: {},

  /*
  Type of chart
  */
  bar: {},
  pie: {},
  donut: {},
  gauge: {},

  /**
    Grid lines
  */
  grid: {},

  /**
    Legend
  */
  legend: {},

  /**
    Tooltip
  */
  tooltip: {},

  /**
    Subchart
  */
  subchart: {},

  /**
    Zoom
  */
  zoom: {},

  /**
    Point
  */
  point: {},

  /**
    Line
  */
  line: {},

  /**
    Area
  */
  area: {},

  /**
    Size
  */
  size: {},

  /**
    Padding
  */
  padding: {},

  /**
    Color
  */
  color: {},

  /**
    Transition
  */
  transition: {},

  /**

  */
  _chart: undefined,

  /**
    The Chart
  */
  chart: Ember.computed('config', function() {
    var self = this;

    if (Ember.isEmpty(self.get('_chart'))) {
      // Empty, create it.
      var container = self.$().get(0);
      if (Ember.isEmpty(container)) {
        return undefined;
      } else {
        var config = self.get('_config');
        var chart = c3.generate(config);
        self.set('_chart', chart);
        return chart;
      }
    } else {
      // Editor is already created and cached.
      return self.get('_chart');
    }
  }),

  _config: Ember.computed(
  'data',
  'axis',
  'regions',
  'bar',
  'pie',
  'donut',
  'gauge',
  'grid',
  'legend',
  'tooltip',
  'subchart',
  'zoom',
  'point',
  'line',
  'area',
  'size',
  'padding',
  'color',
  'transition',
  function() {
    var self = this;
    var c = self.getProperties([
      'data',
      'axis',
      'regions',
      'bar',
      'pie',
      'donut',
      'gauge',
      'grid',
      'legend',
      'tooltip',
      'subchart',
      'zoom',
      'point',
      'line',
      'area',
      'size',
      'padding',
      'color',
      'transition'
    ]);

    Ember.A([
      'oninit',
      'onrendered',
      'onmouseover',
      'onmouseout',
      'onresize',
      'onresized'
    ]).forEach(function(eventname) {
      c[eventname] = function() {
        self.sendAction(eventname, this);
      };
    });

    c.bindto = self.$().get(0);
    return c;
  }),

  /**
    Data Observer
  */
  dataDidChange: Ember.observer('data', function() {
    // console.log('data');
    var self = this;
    var chart = self.get('chart');
    if (Ember.isEmpty(chart)) {
      return;
    }
    var data = self.get('data');
    if (Ember.isEmpty(data)) {
      return;
    }
    // console.log('data', data, chart);
    chart.load(data);
  }),
  /**
  See https://github.com/emberjs/ember.js/issues/10661
  and http://stackoverflow.com/a/25523850/2578205
  */
  didInsertElement: function() {
    // console.log('didInsertElement', this, controller);
    var controller = this.get('targetObject');
    // Find the key on the controller for the data passed to this component
    // See http://stackoverflow.com/a/9907509/2578205
    var propertyKey;
    var data = this.get('data');
    for ( var prop in controller ) {
        if ( controller.hasOwnProperty( prop ) ) {
             if ( controller[ prop ] === data ) {
               propertyKey = prop;
               break;
             }
        }
    }
    if (Ember.isEmpty(propertyKey)) {
      // console.log('Could not find propertyKey', data);
    } else {
      // console.log('Found key!', propertyKey, data);
      controller.addObserver(propertyKey, this, this.dataDidChange);
    }
    this.dataDidChange();
  }

});
