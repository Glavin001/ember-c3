import Component from "@ember/component";
import { getProperties } from "@ember/object";
import { debounce, later } from "@ember/runloop";
import { isEmpty, isPresent } from "@ember/utils";
import c3 from "c3";

export default Component.extend({
  tagName: "div",
  classNames: ["c3-chart-component"],
  _transition: 350,
  dtitle: null,

  // triggered when data is updated by didUpdateAttrs
  _reload() {
    // didUpdateAttrs() can schedule _reload when the component is being destroyed
    // this prevents the reload and an error being spit out into the console
    if (this.isDestroying || this.isDestroyed) {
      return;
    }

    const chart = this.c3chart;

    // if data should not be appended
    // e.g. when using a pie or donut chart
    if (this.unloadDataBeforeChange) {
      chart.unload();

      // default animation is 350ms
      // data must by loaded after unload animation (350)
      // or chart will not properly render

      later(() => {
        chart.load(
          // data, axis, color are the only mutable elements
          this.data,
          this.axis,
          this.color
        );
      }, this.transition || this._transition);
    } else {
      chart.load(this.data, this.axis, this.color);
    }
  },

  // triggered when component added by didInsertElement
  _setupc3() {
    let properties = [
      "data", "line", "bar", "pie", "donut", "gauge",
      "grid", "legend", "tooltip", "subchart", "zoom",
      "point", "axis", "regions", "area", "size",
      "padding", "color", "transition", "title", "interaction"
    ];

    // get base c3 properties
    const chartConfig = getProperties(this, properties);

    // If no data passed, set dummy
    // data to prevent rendering errors
    // A console error may still be generated
    // but it won't crash ember
    let cd = chartConfig.data;
    if (isEmpty(cd))
      chartConfig.data = {
        xs: null,
        columns: [],
        empty: { label: { text: "No Data" } }
      };
    else if (
      isEmpty(cd.url) &&
      isEmpty(cd.json) &&
      isEmpty(cd.rows) &&
      isEmpty(cd.columns)
    ) {
      chartConfig.data.columns = [];
      chartConfig.data.empty = { label: { text: "No Data" } };
    }

    // bind c3 chart to component's DOM element
    chartConfig.bindto = this.element;

    // emit chart events to controller
    chartConfig.oninit = () => this.oninit && this.oninit();
    chartConfig.onrendered = () =>
      this.onrendered && this.onrendered(this.c3chart);
    chartConfig.onmouseover = () =>
      this.onmouseover && this.onmouseover(this.c3chart);
    chartConfig.onmouseout = () =>
      this.onmouseout && this.onmouseout(this.c3chart);
    chartConfig.onresize = () => this.onresize && this.onresize(this.c3chart);
    chartConfig.onresize = () => this.onresize && this.onresize(this.c3chart);
    chartConfig.onresized = () =>
      this.onresized && this.onresized(this.c3chart);

    // render the initial chart
    this.set("c3chart", c3.generate(chartConfig));
  },

  didInsertElement() {
    this._super(...arguments);
    this._setupc3();
  },

  didUpdateAttrs() {
    this._super(...arguments);
    
    // dynamic title property
    if (isPresent(this.dtitle)) {
      document.querySelector(`#${this.element.id} .c3-title`).innerHTML = this.dtitle.text;
      this.c3chart.flush();
    }

    // don't refresh other properties if they cause side effects
    if (isEmpty(this.dtitle) || (isPresent(this.dtitle) && this.dtitle.refresh))
      debounce(this, this._reload, 360);
  },

  // execute teardown method
  willDestroyElement() {
    this._super(...arguments);
    this.c3chart.destroy();
  }
});
