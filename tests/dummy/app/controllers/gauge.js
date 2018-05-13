import Controller from '@ember/controller';
import { later } from '@ember/runloop';
import { computed } from '@ember/object';

export default Controller.extend({

  init: function() {
    this._super(...arguments);
    later(() => {
      this.set('columns', [
        ['data', 10]
      ]);
    }, 1000);

    later(() => {
      this.set('columns', [
        ['data', 50]
      ]);
    }, 2000);

    later(() => {
      this.set('columns', [
        ['data', 70]
      ]);
    }, 3000);

    later(() => {
      this.set('columns', [
        ['data', 0]
      ]);
    }, 4000);

    setTimeout(() => {
      this.set('columns', [
        ['data', 100]
      ]);
    }, 5000);

  },

  columns: computed(function() {
    return [
      ['data', 91.4]
    ];
  }),

  data: computed('columns', function() {
    return {
      columns: this.get('columns'),
      type: 'gauge'
    };
  }),

  gauge: computed(function() {
    return {
      //        label: {
      //            format: function(value, ratio) {
      //                return value;
      //            },
      //            show: false // to turn off the min/max labels.
      //        },
      //    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
      //    max: 100, // 100 is default
      //    units: ' %',
      //    width: 39 // for adjusting arc thickness
    };
  }),

  color: computed(function() {
    return {
      pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
      threshold: {
        //            unit: 'value', // percentage is default
        //            max: 200, // 100 is default
        values: [30, 60, 90, 100]
      }
    };
  }),

  size: computed(function() {
    return {
      height: 180
    };
  })
});
