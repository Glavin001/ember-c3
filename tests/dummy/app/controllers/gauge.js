import Controller from "@ember/controller";
import { later } from "@ember/runloop";
import { action } from "@ember/object";

export default class GuageController extends Controller {
  data = {
    columns: [["data", 91.4]],
    type: "gauge"
  };

  // the three color levels for the percentage values
  color = {
    pattern: ["#FF0000", "#F97600", "#F6C600", "#60B044"],
    threshold: {
      values: [30, 60, 90, 100]
    }
  };

  size = {
    height: 180
  };

  // chart title
  title = { text: "Percent complete" };
  padding = { top: 20 };

 
  @action
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
