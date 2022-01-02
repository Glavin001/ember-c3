import { action } from "@ember/object";
import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";

export default class ChartObjController extends Controller {
  chart = null;
  @tracked chartTitle = "Chart Object";
  @tracked isBar = false;
  @tracked isStacked = false;
  @tracked graphVisible = true;
  @tracked legendVisible = true;

  data = this.data || {
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

  // get chart object from component
  @action
  getChart(chart) {
    this.chart = chart;
  }

  @action
  toggleLegend() {
    let c = this.chart;
    this.legendVisible = !this.legendVisible;

    if (this.legendVisible) c.legend.show();
    else c.legend.hide();
  }

  @action
  toggleData3() {
    let c = this.chart;
    this.graphVisible = !this.graphVisible;

    if (this.graphVisible) c.show("data3");
    else c.hide("data3");
  }

  @action
  transform() {
    let c = this.chart;
    this.isBar = !this.isBar;

    if (this.isBar) {
      c.transform("bar");
      this.chartTitle = "Chart Object - Bar Chart";
    } else {
      c.transform("line");
      c.groups([["data1", "data2"]]);
      this.isStacked = false;
      this.chartTitle = "Chart Object";
    }
  }

  @action
  stackBars() {
    let c = this.chart;

    if (this.isBar && !this.isStacked) {

      this.isStacked = !this.isStacked;
      
      c.groups([
        ["data1", "data2"],
        ["data4", "data5"],
        ["data3", "data6"]
      ]);
    } else c.groups([["data1", "data2"]]);
  }

  @action
  makeCombo() {
    let c = this.chart;
    c.transform("bar");
    c.transform("spline", "data3");
    c.transform("line", "data4");
    c.transform("area", "data6");
    this.chartTitle = "Chart Object - Combo Chart";
  }

  @action
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
