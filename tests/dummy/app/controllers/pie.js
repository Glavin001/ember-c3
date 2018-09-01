import { bind, later } from '@ember/runloop';
import Controller from '@ember/controller';
import { computed }  from '@ember/object';
/* eslint ember/avoid-leaking-state-in-ember-objects: "off" */

export default Controller.extend({

  init: function () {
    this._super(...arguments);

    later(this, () => {
      this.get('data.columns').push(
        ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2,
          0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3,
          0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2,
          0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1,
          0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2,
          0.2, 0.2
        ]);
      this.get('data.columns').push(
        ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0,
          1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0,
          1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7,
          1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3,
          1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3,
          1.1, 1.3
        ]);
      this.get('data.columns').push(
        ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8,
          1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2,
          2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8,
          2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8,
          1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0,
          2.3, 1.8
        ]);
      this.notifyPropertyChange('data');
    },
      1500);

    // FIXME: No way to unload yet
    // Ember.run.later(function() {
    //   chart.unload({
    //     ids: 'data1'
    //   });
    //   chart.unload({
    //     ids: 'data2'
    //   });
    // }, 2500);

  },

  data: computed(function() {
    // iris data from R
    return {
      columns: [
        ['data1', 30],
        ['data2', 120],
      ],
      type: 'pie',
      onclick: bind(this, this.get('actions.myClick')),
      onmouseover: bind(this, function(d, i) {
        console.log("onmouseover", d, i);
      }),
      onmouseout: (d, i) => {
        console.log("onmouseout", d, i);
      }
    }
  }),

  actions: {
    myClick(d, i) {
      alert(`clicked ${d.name}`)
    }
  }

});