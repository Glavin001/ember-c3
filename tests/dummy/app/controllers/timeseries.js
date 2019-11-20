import { later } from "@ember/runloop";
import Controller from "@ember/controller";

export default Controller.extend({
  chart: null,

  init() {
    this._super(...arguments);
    this.data = this.data || {
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
        ["data2", 130, 367, 200, 500, 250, 350]
      ]
    };

    this.axis = this.axis || {
      x: {
        type: "timeseries",
        tick: {
          format: "%Y-%m-%d"
        }
      }
    };

    // chart title
    this.title = this.title || { text: "Downloads by Day" };
    this.padding = this.padding || { top: 20 };
  },

  animate() {
    later(this, function() {
        this.data.columns.push(["data3", 400, 500, 450, 700, 600, 500]);
        this.data.columns.push(["data4", 300, 235, 250, 750, 675, 590]);
        this.data.columns.push(["data5", 100, 345, 400, 650, 500, 550]);
        this.notifyPropertyChange("data");
      },
      500
    );
  },

  actions: {
    animate() {
      this.animate();
    }
  }
});
