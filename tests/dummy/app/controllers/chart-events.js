import Controller from "@ember/controller";
import { action } from '@ember/object';
import classic from 'ember-classic-decorator';
import { later } from "@ember/runloop";
@classic
export default class ChartEventsController extends Controller {
  pageTitle = "C3 Chart Events";
  message = null;

  axis = {
    x: {
      type: "category",
      categories: ["Central", "East", "West"],
      rotated: true
    }
  };

  size = {
    width: 650
  };

  grid = {
    y: {
      lines: [{ value: 900, text: "Yearly Target" }]
    }
  };

  legend = {
    hide: true
  };

  tooltip = {
    grouped: false
  };

  title = { text: "Regional Sales" };
  padding = { top: 20, bottom: 5, right: 15 };

  jsonData = null;

  get data() {
    return {
      json: this.jsonData,
      type: "bar",
      keys: {
        x: "region",
        value: ["total"]
      }
    };
  }

   // get chart object
   @action
   getChart(chart) {
     this.chart = chart;
   }

  setup() {
    this.set("pageTitle", "Chart Events - loading...");
    later(this, () => this.set("pageTitle", "C3 Chart Events"), 500);
  }

  @action
  mouseover(chart) {
    document.getElementById(chart).classList.remove("demo-box");
    document
      .getElementById(this.chart.element.id)
      .classList.add("demo-chart-selected");
    this.set("pageTitle", "YTD Sales");
  }

  @action
  mouseout(chart) {
    document.getElementById(chart).classList.add("demo-box");
    document
      .getElementById(this.chart.element.id)
      .classList.remove("demo-chart-selected");
    this.set("pageTitle", "C3 Chart Events");
  }

  @action
  resizing /* chart */() {
    this.set("message", "adjusting...");
    later(() => this.set("message", ""), 700);
  }
}
