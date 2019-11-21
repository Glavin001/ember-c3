import classic from 'ember-classic-decorator';
import { computed } from '@ember/object';
import { bind, later } from "@ember/runloop";
import Controller from "@ember/controller";

@classic
export default class PieController extends Controller {
  chart = null;

  init() {
    super.init(...arguments);

    // iris data from R
    this.data = this.data || {
      columns: [
        ["data1", 30],
        ["data2", 120]
      ],
      type: "pie",
      onclick: this.onclick
    };

    this.title = this.title || { text: "Iris data from R" };
    this.padding = this.padding || { top: 20 };
  }

  @computed
  get onclick() {
    return bind(this, this.myClick);
  }

  myClick(d) {
    alert(`clicked ${d.name}`);
  }

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
