import { bind } from '@ember/runloop';
import { action } from '@ember/object';
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class DrilldownController extends Controller {
  @tracked dtitle;

  baseData = [
    ['Blue Flowers', 30],
    ['Red Flowers', 120],
    ['Yellow Flowers', 300]
  ];

  blueFlowers = [
    ['Wolfsbane', 5],
    ['Cornflower', 17],
    ['Hydrangea', 24],
    ['Triteleia', 51],
    ['Vanda', 3]
  ];

  redFlowers = [
    ['Chrysanthemum', 15],
    ['Poppy', 2],
    ['Peony', 34],
    ['Azalea', 37],
    ['Gloxinia', 5]
  ];

  yellowFlowers = [
    ['Marigold', 25],
    ['Yarrow', 10],
    ['Begonia', 21],
    ['Daisy', 39],
    ['Snapdragon', 5]
  ];

  whiteFlowers = [['White Flowers', 60]];

  // chart title
  title = { text: 'Flowers by Color' };
  padding = { top: 20 };

  unloadWhite = this.whiteFlowers.map(item => item[0]);
  unloadBlue = this.blueFlowers.map(item => item[0]);
  unloadRed = this.redFlowers.map(item => item[0]);
  unloadYellow = this.yellowFlowers.map(item => item[0]);

  // get chart object from component
  @action
  getChart(chart) {
    this.chart = chart;
  }

  // iris data from R
  get data() {
    return {
      columns: [
        ['Blue Flowers', 30],
        ['Red Flowers', 120],
        ['Yellow Flowers', 300]
      ],
      type: 'pie',
      onclick: bind(this, this.myClick)
    };
  }

  myClick(data) {
    switch (data.name) {
      case 'Blue Flowers':
        this.drilldownBlue();
        break;

      case 'Red Flowers':
        this.drilldownRed();
        break;

      case 'Yellow Flowers':
        this.drilldownYellow();
        break;
    }
  }

  @action
  addWhite() {
    this.dtitle = { text: 'Four Colors', refresh: false };
    this.chart.load({ columns: this.whiteFlowers });
  }

  @action
  titleOnly() {
    this.dtitle = { text: 'Flowers are Colorful!!!', refresh: false };
  }

  @action
  resetData() {
    let c = this.chart;
    this.dtitle = { text: 'Flowers by Color', refresh: false };
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
    this.dtitle = { text: 'Four Colors', refresh: false };
    c.load({ columns: this.blueFlowers });
    c.unload([
      'Blue Flowers',
      'Red Flowers',
      'Yellow Flowers',
      'White Flowers'
    ]);
  }

  drilldownRed() {
    let c = this.chart;
    this.dtitle = { text: 'Red Flowers', refresh: false };
    c.load({ columns: this.redFlowers });
    c.unload([
      'Blue Flowers',
      'Red Flowers',
      'Yellow Flowers',
      'White Flowers'
    ]);
  }

  drilldownYellow() {
    let c = this.chart;
    this.dtitle = { text: 'Yellow Flowers', refrehs: false };
    c.load({ columns: this.yellowFlowers });
    c.unload([
      'Blue Flowers',
      'Red Flowers',
      'Yellow Flowers',
      'White Flowers'
    ]);
  }
}
