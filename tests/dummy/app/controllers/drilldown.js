import { bind } from "@ember/runloop";
import Controller from "@ember/controller";
import { computed } from "@ember/object";
import { map } from "@ember/object/computed";

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.baseData = this.baseData || [
      ["Blue Flowers", 30],
      ["Red Flowers", 120],
      ["Yellow Flowers", 300]
    ];

    this.blueFlowers = this.blueFlowers || [
      ["Wolfsbane", 5],
      ["Cornflower", 17],
      ["Hydrangea", 24],
      ["Triteleia", 51],
      ["Vanda", 3]
    ];

    this.redFlowers = this.redFlowers || [
      ["Chrysanthemum", 15],
      ["Poppy", 2],
      ["Peony", 34],
      ["Azalea", 37],
      ["Gloxinia", 5]
    ];

    this.yellowFlowers = this.yellowFlowers || [
      ["Marigold", 25],
      ["Yarrow", 10],
      ["Begonia", 21],
      ["Daisy", 39],
      ["Snapdragon", 5]
    ];

    this.whiteData = this.whiteData || [["White Flowers", 60]];

    // chart title
    this.title = this.title || { text: "Flowers by Color" };
    this.padding = this.padding || { top: 20 };
  },

  unloadWhite: map("whiteData", function(item) {
    return item[0];
  }),

  unloadBlue: map("blueFlowers", function(item) {
    return item[0];
  }),

  unloadRed: map("redFlowers", function(item) {
    return item[0];
  }),

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
      c.unload([
        "Blue Flowers",
        "Red Flowers",
        "Yellow Flowers",
        "White Flowers"
      ]);
    },

    drilldownRed() {
      let c = this.chart;
      this.set("dtitle", { text: "Red Flowers", refresh: false });
      c.load({ columns: this.redFlowers });
      c.unload([
        "Blue Flowers",
        "Red Flowers",
        "Yellow Flowers",
        "White Flowers"
      ]);
    },

    drilldownYellow() {
      let c = this.chart;
      this.set("dtitle", { text: "Yellow Flowers", refrehs: false });
      c.load({ columns: this.yellowFlowers });
      c.unload([
        "Blue Flowers",
        "Red Flowers",
        "Yellow Flowers",
        "White Flowers"
      ]);
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
