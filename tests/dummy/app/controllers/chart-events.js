import { computed } from "@ember/object";
import Controller from "@ember/controller";
import { later } from "@ember/runloop";
import { action } from '@ember/object';

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

  @computed
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

  @action
  setup() {
    this.set("pageTitle", "Chart Events - loading...");
    later(this, () => this.set("pageTitle", "C3 Chart Events"), 500);
  }

  @action
  mouseover(chartId) {
    document.getElementById(chartId).classList.remove("demo-box");
    document
      .getElementById(chartId)
      .classList.add("demo-chart-selected");
    this.set("pageTitle", "YTD Sales");
  }

  @action
  mouseout(chartId) {
    document.getElementById(chartId).classList.add("demo-box");
    document
      .getElementById(chartId)
      .classList.remove("demo-chart-selected");
    this.set("pageTitle", "C3 Chart Events");
  }

  @action
  resizing(/* chartId */) {
    this.set("message", "adjusting...");
    later(() => this.set("message", ""), 700);
  }
}
