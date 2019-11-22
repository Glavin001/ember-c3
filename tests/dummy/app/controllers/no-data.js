import { computed } from "@ember/object";
import { bind, later } from "@ember/runloop";
import { action } from "@ember/object";
import Controller from "@ember/controller";

export default class NoDataController extends Controller {
  // No data for graph
  data = {
    type: "pie",
    onclick: this.onclick
  };

  title = { text: "Iris data from R" };
  padding = { top: 20 };

  @computed
  get onclick() {
    return bind(this, this.myClick);
  }

  myClick(d /*i */) {
    alert(`clicked ${d.name}`);
  }

  @action
  animateChart() {
    later(this, () => {
      this.data.columns.push(
        ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2,
          0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3,
          0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2,
          0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1,
          0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2,
          0.2, 0.2
        ]);
      this.data.columns.push(
        ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0,
          1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0,
          1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7,
          1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3,
          1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3,
          1.1, 1.3
        ]);
      this.data.columns.push(
        ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8,
          1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2,
          2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8,
          2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8,
          1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0,
          2.3, 1.8
        ]);
      this.notifyPropertyChange("data");
    },
      500);
  }
}
