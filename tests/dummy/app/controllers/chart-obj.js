import { action } from "@ember/object";
import Controller from "@ember/controller";
import classic from 'ember-classic-decorator';

@classic
export default class ChartObjController extends Controller {
  chart = null;
  chartTitle = "Chart Object";

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

  // get chart object
  @action
  getChart(chart) {
    this.chart = chart;
  }
  
  @action
  toggleLegend() {
    this.toggleProperty("legendVisible");

    if (this.legendVisible) this.chart.legend.show();
    else this.chart.legend.hide();
  }

  @action
  toggleData3() {
    this.toggleProperty("graphVisible");

    if (this.graphVisible) this.chart.show("data3");
    else this.chart.hide("data3");
  }

  @action
  transform() {
    this.toggleProperty("isBar");

    if (this.isBar) {
      this.chart.transform("bar");
      this.set("chartTitle", "Chart Object - Bar Chart");
    } else {
      this.chart.transform("line");
      this.chart.groups([["data1", "data2"]]);
      this.set("isStacked", false);
      this.set("chartTitle", "Chart Object");
    }
  }

  @action
  stackBars() {

    if (this.isBar && !this.isStacked) {
      this.toggleProperty("isStacked");
      this.chart.groups([
        ["data1", "data2"],
        ["data4", "data5"],
        ["data3", "data6"]
      ]);
    } else this.chart.groups([["data1", "data2"]]);
  }

  @action
  makeCombo() {
    this.chart.transform("bar");
    this.chart.transform("spline", "data3");
    this.chart.transform("line", "data4");
    this.chart.transform("area", "data6");
    this.set('chartTitle', 'Chart Object - Combo Chart')
  }

  @action
  changeColors() {
    this.chart.data.colors({
      data1: "#ff0000",
      data2: "#00ff00",
      data3: "#0000ff",
      data4: "#ff9900",
      data5: "#ff4dd2",
      data6: "#ffff4d"
    });
  }
}
