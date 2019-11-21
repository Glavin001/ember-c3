import classic from 'ember-classic-decorator';
import Controller from "@ember/controller";

@classic
export default class ChartObjController extends Controller {
  chart = null;
  chartTitle = "Chart Object";

  init() {
    super.init(...arguments);
    this.data = this.data || {
      columns: [
        ["data1", 30, 20, 50, 40, 60, 50],
        ["data2", 200, 130, 90, 240, 130, 220],
        ["data3", 300, 200, 160, 400, 250, 250],
        ["data4", 200, 130, 90, 240, 130, 220],
        ["data5", 130, 120, 150, 140, 160, 150],
        ["data6", 90, 70, 20, 50, 60, 120]
      ],
      type: "line",
      groups: [["data1", "data2"]]
    };
  }

  toggleLegend() {
    let c = this.chart;
    this.toggleProperty("legendVisible");

    if (this.legendVisible) c.legend.show();
    else c.legend.hide();
  }

  toggleData3() {
    let c = this.chart;
    this.toggleProperty("graphVisible");

    if (this.graphVisible) c.show("data3");
    else c.hide("data3");
  }

  transform() {
    let c = this.chart;
    this.toggleProperty("isBar");

    if (this.isBar) {
      c.transform("bar");
      this.set("chartTitle", "Chart Object - Bar Chart");
    } else {
      c.transform("line");
      c.groups([["data1", "data2"]]);
      this.set("isStacked", false);
      this.set("chartTitle", "Chart Object");
    }
  }

  stackBars() {
    let c = this.chart;

    if (this.isBar && !this.isStacked) {
      this.toggleProperty("isStacked");
      c.groups([
        ["data1", "data2"],
        ["data4", "data5"],
        ["data3", "data6"]
      ]);
    } else c.groups([["data1", "data2"]]);
  }

  makeCombo() {
    let c = this.chart;
    c.transform("bar");
    c.transform("spline", "data3");
    c.transform("line", "data4");
    c.transform("area", "data6");
    this.set("chartTitle", "Chart Object - Combo Chart");
  }

  changeColors() {
    let c = this.chart;

    c.data.colors({
      data1: "#ff0000",
      data2: "#00ff00",
      data3: "#0000ff",
      data4: "#ff9900",
      data5: "#ff4dd2",
      data6: "#ffff4d"
    });
  }
}
