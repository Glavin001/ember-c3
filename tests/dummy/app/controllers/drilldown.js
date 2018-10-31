import { bind, later } from "@ember/runloop";
import Controller from "@ember/controller";
import { computed } from "@ember/object";
/* eslint ember/avoid-leaking-state-in-ember-objects: "off" */

export default Controller.extend({
  chart: null,
  legendVisible: true,
  lbuttonText: "Hide Legend",

  baseData: [
    ["Blue Flowers", 30],
    ["Red Flowers", 120],
    ["Yellow Flowers", 300]
  ],

  blueFlowers: [
    ["wolfsbane", 5],
    ["Cornflower", 17],
    ["Hydrangea", 24],
    ["Triteleia", 51],
    ["Vanda", 3]
  ],

  redFlowers: [
    ["Chrysanthemum", 15],
    ["Poppy", 2],
    ["Peony", 34],
    ["Azalea", 37],
    ["Gloxinia", 5]
  ],

  yellowFlowers: [
    ["Marigold", 25],
    ["Yarrow", 10],
    ["Begonia", 21],
    ["Daisy", 39],
    ["Snapdragon", 5]
  ],
  // iris data from R
  data: computed(function() {
    return {
      columns: [
        ["Blue Flowers", 30],
        ["Red Flowers", 120],
        ["Yellow Flowers", 300]
      ],
      type: "pie",
      onclick: bind(this, this.get("actions.myClick"))
    };
  }),

  title: { text: "Iris data from R" },

  padding: { top: 20 },

  actions: {
    myClick(d) {
      switch (d.name) {
        case "Blue Flowers":
          this.send("drilldownBlue");
          break;
        case "Red Flowers":
          this.send("drilldownRed");
          break;
        case "Yellow Flowers":
          this.send("drilldownYellow");
          break;
      }
    },

    resetData() {
      let c = this.get("chart");
      c.unload();
      later(this, () => c.load({ columns: this.get("baseData") }), 300);
    },

    drilldownBlue() {
      let c = this.get("chart");
      c.load({ columns: this.get("blueFlowers") });
      c.unload(["Blue Flowers", "Red Flowers", "Yellow Flowers"]);
    },

    drilldownRed() {
      let c = this.get("chart");
      c.load({ columns: this.get("redFlowers") });
      c.unload(["Blue Flowers", "Red Flowers", "Yellow Flowers"]);
    },

    drilldownYellow() {
      let c = this.get("chart");
      c.load({ columns: this.get("yellowFlowers") });
      c.unload(["Blue Flowers", "Red Flowers", "Yellow Flowers"]);
    },

    toggleLegend() {
      let c = this.get("chart");
      this.toggleProperty("legendVisible");
      let v = this.get("legendVisible");
      let t = v ? "Hide Legend" : "Show Legend";
      this.set("lbuttonText", t);

      if (v) c.legend.show();
      else c.legend.hide();
    }
  }
});
