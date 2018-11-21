import { bind } from "@ember/runloop";
import Controller from "@ember/controller";
import { computed } from "@ember/object";
import { map } from "@ember/object/computed";
/* eslint ember/avoid-leaking-state-in-ember-objects: "off" */

export default Controller.extend({
  chart: null,

  baseData: [
    ["Blue Flowers", 30],
    ["Red Flowers", 120],
    ["Yellow Flowers", 300]
  ],

  whiteData: [["White Flowers", 60]],

  unloadWhite: map("whiteData", function(item) {
    return item[0];
  }),

  blueFlowers: [
    ["Wolfsbane", 5],
    ["Cornflower", 17],
    ["Hydrangea", 24],
    ["Triteleia", 51],
    ["Vanda", 3]
  ],

  unloadBlue: map("blueFlowers", function(item) {
    return item[0];
  }),

  redFlowers: [
    ["Chrysanthemum", 15],
    ["Poppy", 2],
    ["Peony", 34],
    ["Azalea", 37],
    ["Gloxinia", 5]
  ],

  unloadRed: map("redFlowers", function(item) {
    return item[0];
  }),

  yellowFlowers: [
    ["Marigold", 25],
    ["Yarrow", 10],
    ["Begonia", 21],
    ["Daisy", 39],
    ["Snapdragon", 5]
  ],

  unloadYellow: map("yellowFlowers", function(item) {
    return item[0];
  }),

  // iris data from R
  data: computed(function() {
    return {
      columns: [
        ["Blue Flowers", 30],
        ["Red Flowers", 120],
        ["Yellow Flowers", 300]
      ],
      type: "pie",
      onclick: bind(this, this.actions.myClick)
    };
  }),

  // chart title
  title: { text: "Flowers by Color" },
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
      let c = this.chart;
      this.set("dtitle", { text: "Flowers by Color", refresh: false });
      c.load({ columns: this.baseData });
      c.unload(
        this.unloadBlue
          .concat(this.unloadRed)
          .concat(this.unloadYellow)
          .concat(this.unloadWhite)
      );
    },

    drilldownBlue() {
      let c = this.chart;
      this.set("dtitle", { text: "Four Colors", refresh: false });
      c.load({ columns: this.blueFlowers });
      c.unload(["Blue Flowers", "Red Flowers", "Yellow Flowers", "White Flowers"]);
    },

    drilldownRed() {
      let c = this.chart;
      this.set("dtitle", { text: "Red Flowers", refresh: false });
      c.load({ columns: this.redFlowers });
      c.unload(["Blue Flowers", "Red Flowers", "Yellow Flowers", "White Flowers"]);
    },

    drilldownYellow() {
      let c = this.chart;
      this.set("dtitle", { text: "Yellow Flowers", refrehs: false });
      c.load({ columns: this.yellowFlowers });
      c.unload(["Blue Flowers", "Red Flowers", "Yellow Flowers", "White Flowers"]);
    },

    addWhite() {
      this.set("dtitle", { text: "Four Colors", refresh: false });
      this.chart.load({ columns: this.whiteData });
    },

    titleOnly() {
      this.set("dtitle", { text: "Flowers are Colorful!!!", refresh: false });
    }

  }
});
