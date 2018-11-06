import Controller from "@ember/controller";
import { computed } from "@ember/object";
import { later } from "@ember/runloop";
/* eslint ember/avoid-leaking-state-in-ember-objects: "off" */

export default Controller.extend({
  chart: null,
  pageTitle: "C3 Chart Events",
  message: null,

  init() {
    this._super(...arguments);
  },

  jsonData: null,

  data: computed(function() {
    return {
      json: this.jsonData,
      type: "bar",
      keys: {
        x: "region",
        value: ["total"]
      }
    };
  }),
  axis: {
    x: {
      type: "category",
      categories: ["Central", "East", "West"],
      rotated: true
    }
  },
  size: {
    width: 650
  },
  grid: {
    y: {
      lines: [{ value: 900, text: "Yearly Target" }]
    }
  },
  legend: {
    hide: true
  },
  tooltip: {
    grouped: false
  },
  title: { text: "Regional Sales" },
  padding: { top: 20, bottom: 5, right: 15 },

  actions: {
    init(/* chart */) {
      this.set("pageTitle", "Chart Events - loading...");
      later(this, () => this.set("pageTitle", "C3 Chart Events"), 500);
    },

    mouseover(chart) {
      document.getElementById(chart.element.id).classList.remove("demo-box");
      document
        .getElementById(chart.element.id)
        .classList.add("demo-chart-selected");
      this.set("pageTitle", "YTD Sales");
    },

    mouseout(chart) {
      document.getElementById(chart.element.id).classList.add("demo-box");
      document
        .getElementById(chart.element.id)
        .classList.remove("demo-chart-selected");
      this.set("pageTitle", "C3 Chart Events");
    },

    resizing(/* chart */){
      this.set("message", "adjusting...");
      later(() => this.set("message", ""), 700)
    }
  }
});
