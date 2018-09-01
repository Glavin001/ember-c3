import { later } from '@ember/runloop';
import Controller from '@ember/controller';
/* eslint ember/avoid-leaking-state-in-ember-objects: "off" */

export default Controller.extend({

  init: function() {
    this._super(...arguments);
    
    later(this, () => {
      this.set('data.columns', [
        ['data', 10]
      ]);
      this.notifyPropertyChange('data');
    }, 1000);

    later(this, () => {
      this.set('data.columns', [
        ['data', 50]
      ]);
      this.notifyPropertyChange('data');
    }, 2000);

    later(this, () => {
      this.set('data.columns', [
          ['data', 70]
      ]);
      this.notifyPropertyChange('data');
    }, 3000);

    later(this, () => {
      this.set('data.columns', [
          ['data', 0]
      ]);
      this.notifyPropertyChange('data');
    }, 4000);

    later(this, () => {
      this.set('data.columns', [
          ['data', 100]
      ]);
      this.notifyPropertyChange('data');
    }, 5000);

  },

  data: {
    columns: [
      ['data', 91.4]
    ],
    type: 'gauge',
    onclick: function(d, i) {
      console.log("onclick", d, i);
    },
    onmouseover: function(d, i) {
      console.log("onmouseover", d, i);
    },
    onmouseout: function(d, i) {
      console.log("onmouseout", d, i);
    }
  },

  gauge: {
    // label: {
    //   format: function(value, ratio) {
    //     return value;
    //    },
    //    show: false // to turn off the min/max labels.
    //    },
    //    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
    //    max: 100, // 100 is default
    //    units: ' %',
    //    width: 39 // for adjusting arc thickness
  },
  color: {
    pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
    threshold: {
      // unit: 'value', // percentage is default
      // max: 200, // 100 is default
      values: [30, 60, 90, 100]
    }
  },
  size: {
    height: 180
  }

});