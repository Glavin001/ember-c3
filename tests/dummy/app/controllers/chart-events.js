import Controller from "@ember/controller";
import { computed } from "@ember/object";
import { later } from "@ember/runloop";

export default Controller.extend({
  pageTitle: "C3 Chart Events",
  message: null,

  init() {
    this._super(...arguments);

    this.axis = this.axis || {
      x: {
        type: "category",
        categories: ["Central", "East", "West"],
        rotated: true
      }
    };

    this.size = this.size || {
      width: 650
    };

    this.grid = this.grid || {
      y: {
        lines: [{ value: 900, text: "Yearly Target" }]
      }
    };

    this.legend = this.legend || {
      hide: true
    };

    this.tooltip = this.tooltip || {
      grouped: false
    };

    this.title = this.title || { text: "Regional Sales" };
    this.padding = this.padding || { top: 20, bottom: 5, right: 15 };
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

  actions: {
    setup() {
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

    resizing(/* chart */) {
      this.set("message", "adjusting...");
      later(() => this.set("message", ""), 700);
    }
  }
});
