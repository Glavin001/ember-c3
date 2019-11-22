import { computed } from '@ember/object';
import { map } from '@ember/object/computed';
import { bind } from "@ember/runloop";
import { action } from "@ember/object";
import Controller from "@ember/controller";

export default class DrilldownController extends Controller {

  baseData = [
    ["Blue Flowers", 30],
    ["Red Flowers", 120],
    ["Yellow Flowers", 300]
  ];

  blueFlowers = [
    ["Wolfsbane", 5],
    ["Cornflower", 17],
    ["Hydrangea", 24],
    ["Triteleia", 51],
    ["Vanda", 3]
  ];

  redFlowers = [
    ["Chrysanthemum", 15],
    ["Poppy", 2],
    ["Peony", 34],
    ["Azalea", 37],
    ["Gloxinia", 5]
  ];

  yellowFlowers = [
    ["Marigold", 25],
    ["Yarrow", 10],
    ["Begonia", 21],
    ["Daisy", 39],
    ["Snapdragon", 5]
  ];

  whiteData = [["White Flowers", 60]];

  // chart title
  title =  { text: "Flowers by Color" };
  padding = { top: 20 };

  init() {
    super.init(...arguments);
   
  }

  @map("whiteData", function(item) {
    return item[0];
  })
  unloadWhite;

  @map("blueFlowers", function(item) {
    return item[0];
  })
  unloadBlue;

  @map("redFlowers", function(item) {
    return item[0];
  })
  unloadRed;

  @map("yellowFlowers", function(item) {
    return item[0];
  })
  unloadYellow;

  // iris data from R
  @computed
  get data() {
    return {
      columns: [
        ["Blue Flowers", 30],
        ["Red Flowers", 120],
        ["Yellow Flowers", 300]
      ],
      type: "pie",
      onclick: bind(this, this.myClick)
    };
  }

  myClick(d) {
    switch (d.name) {
      case "Blue Flowers":
        this.drilldownBlue();
        break;

      case "Red Flowers":
        this.drilldownRed();
        break;

      case "Yellow Flowers":
        this.drilldownYellow();
        break;
    }
  }

  @action
  addWhite() {
    this.set("dtitle", { text: "Four Colors", refresh: false });
    this.chart.load({ columns: this.whiteData });
  }

  @action
  titleOnly() {
    this.set("dtitle", { text: "Flowers are Colorful!!!", refresh: false });
  }

  @action
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
  }

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
  }

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
  }

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
  }
}
