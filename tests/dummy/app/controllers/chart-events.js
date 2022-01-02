import Controller from '@ember/controller';
import { later } from '@ember/runloop';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ChartEventsController extends Controller {
  @tracked pageTitle = 'C3 Chart Events';
  @tracked message;

  axis = {
    x: {
      type: 'category',
      categories: ['Central', 'East', 'West'],
      rotated: true
    }
  };

  size = {
    width: 650
  };

  grid = {
    y: {
      lines: [{ value: 900, text: 'Yearly Target' }]
    }
  };

  legend = {
    hide: true
  };

  tooltip = {
    grouped: false
  };

  title = { text: 'Regional Sales' };
  padding = { top: 20, bottom: 5, right: 15 };

  jsonData = null;

  get data() {
    return {
      json: this.model,
      type: 'bar',
      keys: {
        x: 'region',
        value: ['total']
      }
    };
  }

  @action
  setup() {
    this.pageTitle = 'Chart Events - loading...';
    later(this, () => this.pageTitle = 'C3 Chart Events', 500);
  }

  @action
  mouseover(chartId) {
    document.getElementById(chartId).classList.remove('demo-box');
    document.getElementById(chartId).classList.add('demo-chart-selected');
    this.pageTitle = 'YTD Sales';
  }

  @action
  mouseout(chartId) {
    document.getElementById(chartId).classList.add('demo-box');
    document.getElementById(chartId).classList.remove('demo-chart-selected');
    this.pageTitle = 'C3 Chart Events';
  }

  // chart resizing
  @action
  resizing(/* chartId */) {
    this.message = 'adjusting...';
    later(() => this.message = '', 700);
  }
}
