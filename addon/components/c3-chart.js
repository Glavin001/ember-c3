import Component from '@glimmer/component';
import { isEmpty, isPresent } from '@ember/utils';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';
import { task, timeout } from 'ember-concurrency';

import c3 from 'c3';

// make d3 available for direct use
import d3 from 'd3'; // eslint-disable-line no-unused-vars

/** Class ember-c3 */
export default class C3Component extends Component {
  chartId = `c3-${guidFor(this)}`;

  /**
   * chart configuration objed
   * @member {Object}
   */
  config = {};

  /**
   * Delay time to refresh c3 chart
   * @member {number}
   */
  _transition = 350;

  /**
   * Dynamic title for chart
   * @member {String}
   */
  dtitle = null;

  /**
   * Create a c3 chart
   * @param {proxy} Component arguments - this.args proxy
   */
  constructor() {
    super(...arguments);

    // bind c3 chart to component's element
    this.config.bindto = this.chartId;

    // if data is not provided use dummy
    // data to prevent rendering errors
    const dummyData = {
      xs: null,
      columns: [],
      empty: { label: { text: 'No Data' } }
    };

    // Do we have a data object?
    let dataObject = this.data;

    if (!dataObject) {
      this.config.data = dummyData;
    }

    // Does data object have a data source?
    if (dataObject) {
      const isSourcePresent =
        isPresent(this.data.url) ||
        isPresent(this.data.json) ||
        isPresent(this.data.rows) ||
        isPresent(this.data.columns);

      // If no source add empty source
      // else use passed data argument
      if (!isSourcePresent) {
        dataObject.columns = [];
        dataObject.empty = { label: { text: 'No Data' } };
        this.config.data = dataObject;
      } else this.config.data = this.data;
    }

    this.config.axis = this.args.axis;
    this.config.color = this.args.color;

    // chart type arguments
    this.config.color = this.args.color;
    this.config.line = this.args.line;
    this.config.bar = this.args.bar;
    this.config.pie = this.args.pie;
    this.config.donut = this.args.donut;
    this.config.guage = this.args.gauge;

    // chart parameter arguments
    this.config.grid = this.args.grid;
    this.config.legend = this.args.legend;
    this.config.tooltip = this.args.tooltip;
    this.config.subchart = this.args.subchart;
    this.config.zoom = this.args.zoom;
    this.config.point = this.args.point;
    this.config.regions = this.args.regions;
    this.config.area = this.args.area;
    this.config.size = this.args.size;
    this.config.padding = this.args.padding;

    this.config.title = this.args.title;
    this.config.interaction = this.args.interaction;

    // animation tranisiton - we handle transistion not c3
    // same funtionality as the c3 transition setting
    this.transition = this.args.transition;

    // emit chart events to host app

    // oninit
    this.config.oninit = () => this.args.oninit && this.args.oninit();

    // onrendered
    this.config.onrendered = () =>
      this.args.onrendered && this.args.onrendered(this.chart);

    // onmouseover
    this.config.onmouseover = () =>
      this.args.onmouseover && this.args.onmouseover(this.chart);

    // onmouseout
    this.config.onmouseout = () =>
      this.args.onmouseout && this.args.onmouseout(this.chart);

    // onresize
    this.config.onresize = () =>
      this.args.onresize && this.args.onresize(this.chart);

    // onresized
    this.config.onresized = () =>
      this.args.onresized && this.args.onresized(this.chart);
  }

  /**
   * Get the graph data
   * @return {object} Graph data
   */
  get data() {
    return this.args.data;
  }

  /**
   * Get the graph's color object
   * @return {oject} Graph axis
   */
  get axis() {
    return this.args.axis;
  }

  /**
   * Get the graph's color object
   * @return {number} Graph color(s)
   */
  get color() {
    return this.args.color;
  }

  /**
   * Get the dynamic title argument
   *
   * Used to set graph title
   *
   * {
   *  title: <String>,
   *  refresh: <Boolean>
   * }
   *
   * @return {object} Dynamic title
   */
  get title() {
    return this.args.dtitle;
  }

  /**
   * Called from {{did-insert}} modifier
   */
  @action
  setupChart() {
    // bind to component's element
    this.config.bindto = document.getElementById(this.chartId);

    // generate the chart
    this.chart = c3.generate(this.config);

    // provide chart obj - args is proxy, no optional chaining
    if (this.args.c3Chart) this.args.c3Chart(this.chart);
  }

  /**
   * Called from {{did-update}} modifier
   * updates on changes to data, axis, color or dtitle
   */
  @action
  refreshChart() {
    // c3 chart title
    const element = document.querySelector(`#${this.chartId} .c3-title`);

    // change title to this.args.dtitle present
    if (isPresent(this.title)) {
      element.innerHTML = this.title.text;
      this.chart.flush();
    }

    // do not refresh other properties if they cause side effects
    if (isEmpty(this.title) || (isPresent(this.title) && this.title.refresh))
      this.chartReload.perform();
  }

  /**
   * unloads/reloads data using C3 methods
   */
  @task *chartReload() {
    // if data should not be appended
    if (this.unloadDataBeforeChange) {
      this.chart.unload();

      // user specified or internal time
      const time = this.transition ?? this._transition;
      yield timeout(time);

      // data, axis, color are the only mutable elements
      this.chart.load(this.data, this.axis, this.color);
    } else this.chart.load(this.data, this.axis, this.color);
  }

  /**
   * Component life-cycle hook
   */
  willDestroy() {
    super.willDestroy(...arguments);
    this.chart.destroy();
  }
}
