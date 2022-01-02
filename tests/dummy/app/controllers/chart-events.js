import { action } from '@ember/object';
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { task, timeout } from 'ember-concurrency';

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

  // get chart object from component
  @action
  getChart(chart) {
    this.chart = chart;
  }

  @task *setup() {
    this.message = 'loading...';
    yield timeout(1200);
    this.message = '';
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
  @task *resizing(/* chartId */) {
    this.message = 'adjusting...';
    yield timeout(700);
    this.message = '';
  }
}
