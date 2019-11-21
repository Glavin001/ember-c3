import classic from 'ember-classic-decorator';
import Controller from "@ember/controller";
import { later } from "@ember/runloop";

@classic
export default class GuageController extends Controller {
  init() {
    super.init(...arguments);

    this.data = this.data || {
      columns: [["data", 91.4]],
      type: "gauge"
    };

    // the three color levels for the percentage values
    this.color = this.color || {
      pattern: ["#FF0000", "#F97600", "#F6C600", "#60B044"],
      threshold: {
        values: [30, 60, 90, 100]
      }
    };

    this.size = this.size || {
      height: 180
    };

    // chart title
    this.title = this.title || { text: "Percent complete" };
    this.padding = this.padding || { top: 20 };
  }

  animateChart() {
    later(this, () => {
        this.set("data.columns", [["data", 10]]);
        this.notifyPropertyChange("data");
      },
      500
    );

    later(this, () => {
        this.set("data.columns", [["data", 50]]);
        this.notifyPropertyChange("data");
      },
      1000
    );

    later(this, () => {
        this.set("data.columns", [["data", 70]]);
        this.notifyPropertyChange("data");
      },
      1500
    );

    later(this, () => {
        this.set("data.columns", [["data", 0]]);
        this.notifyPropertyChange("data");
      },
      2000
    );

    later(this, () => {
        this.set("data.columns", [["data", 100]]);
        this.notifyPropertyChange("data");
      },
      2500
    );
  }
}
