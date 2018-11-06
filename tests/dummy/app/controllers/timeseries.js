import { later } from "@ember/runloop";
import Controller from "@ember/controller";
/* eslint ember/avoid-leaking-state-in-ember-objects: "off" */

export default Controller.extend({

  chart: null,

  animate() {

    later(
      this,
      function() {
        this.data.columns.push(["data3", 400, 500, 450, 700, 600, 500]);
        this.notifyPropertyChange("data");
      },
      500
    );
  },

  data: {
    x: "x",
    columns: [
      [
        "x",
        "2013-01-01",
        "2013-01-02",
        "2013-01-03",
        "2013-01-04",
        "2013-01-05",
        "2013-01-06"
      ],
      ["data1", 30, 200, 100, 400, 150, 250],
      ["data2", 130, 340, 200, 500, 250, 350]
    ]
  },

  axis: {
    x: {
      type: "timeseries",
      tick: {
        format: "%Y-%m-%d"
      }
    }
  },

  // chart title
  title: { text: "Downloads by Day" },
  padding: { top: 20 },

  actions: {
    animate(){
      this.animate();
    }
  }

});
