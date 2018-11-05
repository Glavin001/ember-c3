import Ember from 'ember';

export default Ember.Controller.extend({

  init: function() {
    this._super.apply(this, arguments);
    var self = this;

    Ember.run.later(function() {
        self.get('data.columns').push(
          ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2,
            0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3,
            0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2,
            0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1,
            0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2,
            0.2, 0.2
          ]);
        self.get('data.columns').push(
          ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0,
            1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0,
            1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7,
            1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3,
            1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3,
            1.1, 1.3
          ]);
        self.get('data.columns').push(
          ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8,
            1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2,
            2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8,
            2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8,
            1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0,
            2.3, 1.8
          ]);
        self.notifyPropertyChange('data');
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

  data: {
    columns: [
      ['data1', 30],
      ['data2', 120],
    ],
    type: 'donut',
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
  donut: {
    title: "Iris Petal Width"
  }

});