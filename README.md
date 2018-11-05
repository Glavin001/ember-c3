# Ember-C3 

[![npm version](https://badge.fury.io/js/ember-c3.svg)](http://badge.fury.io/js/ember-c3)
[![Join the chat at https://gitter.im/Glavin001/ember-c3](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Glavin001/ember-c3?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
 
> Ember component library for [C3, a D3-based reusable chart library](https://github.com/masayuki0812/c3).

**Forked Demo:** https://maxwondercorn.github.io/ember-c3/

Alternatively take a look at [Ember-NVD3](https://github.com/Glavin001/ember-nvd3) for your charting needs.

---

Installation
------------------------------------------------------------------------------

```bash
ember install ember-c3
```

## Usage

For a complete example, see the [dummy test app in `tests/dummy/app/`]
(https://github.com/maxwondercorn/ember-c3/tree/master/tests/dummy/app)

<!-- (https://github.com/Glavin001/ember-c3/tree/master/tests/dummy/app). -->

| Combination |
| --- |
| Demo: http://blog.glavin.org/ember-c3/#/ |
| ![image](https://cloud.githubusercontent.com/assets/1885333/9792404/4e750a06-57b6-11e5-96c1-8a6cabdef4ac.png) |

| Timeseries |
| --- |
| Demo: http://blog.glavin.org/ember-c3/#/timeseries |
| ![ember-c3-timeseries-4](https://cloud.githubusercontent.com/assets/1885333/9792600/6032061c-57b7-11e5-9a2c-80e680d274a5.gif) |

| Gauge | Pie | Donut |
| --- | --- | --- |
| Demo: http://blog.glavin.org/ember-c3/#/gauge | Demo: http://blog.glavin.org/ember-c3/#/pie | Demo: http://blog.glavin.org/ember-c3/#/donut |
| ![ember-c3-gauge-2](https://cloud.githubusercontent.com/assets/1885333/9792503/c7ebc05a-57b6-11e5-8d43-116e9dd7c368.gif) | ![ember-c3-pie-1](https://cloud.githubusercontent.com/assets/1885333/9792639/8f90f5ee-57b7-11e5-859c-9a083255df4a.gif) | ![ember-c3-donut-1](https://cloud.githubusercontent.com/assets/1885333/9792665/ad4a6ee4-57b7-11e5-90d4-df152b24e4a3.gif)|

### Basic

Where `model` is your C3 data:

```handlebars
{{c3-chart data=model}}
```

### Advanced

See http://c3js.org/examples.html for examples of how to use C3.

```hbs
{{c3-chart
  c3chart=chart
  data=model
  axis=axis
  regions=regions
  bar=bar
  pie=pie
  donut=donut
  gauge=gauge
  line=line
  area=area
  grid=grid
  legend=legend
  tooltip=tooltip
  subchart=subchart
  zoom=zoom
  point=point
  size=size
  padding=padding
  title=title
  color=color
  transition=transition
  unloadDataBeforeChange=true
  oninit
  onrendered
  onmouseover
  onmouseout
  onresize
  onresized
}}
```

The properties match their corresponding C3 objects found in the [C3 Documentation](https://c3js.org/gettingstarted.html#generate).  As shown in the C3 documentation, most of the objects (i.e. bar, axis, size, etc) can be included in the data object.  The component properties breakout the objects to make it easier to manipulate the chart.  Note: The chart type is always assigned in the chart data object

Property | Description | Example
---------|-------------|--------
c3chart | Points to the c3 chart created by the component.  Any C3 api method can be executed using this property | chart.hide("data1")
  data* | C3 data [object](https://c3js.org/gettingstarted.html#generate). Chart data is mutable after the chart is created
  axis* | C3 axis [object](https://c3js.org/reference.html#axis-rotated). See C3 examples for combining with data object.  Chart axis are mutable after the chart is created
  regions | need to test may need to be with data
  bar | Used to assign or modify bar chart [properties](https://c3js.org/reference.html#bar-width) |
  pie | Used to assign or modify pie chart [properties](https://c3js.org/reference.html#pie-label-show) |
  donut | Used to assign or modify donut chart [properties](https://c3js.org/reference.html#donut-label-show) |
  gauge | Used to assign or modify gauge chart [properties](https://c3js.org/reference.html#gauge-label-show) |
  line | Used to assign or modify line chart [properties](https://c3js.org/reference.html#line-connectNull) |
  area | Used to assign or modify area chart [properties](https://c3js.org/reference.html#area-zerobased) |
  point | Used to assign or modify data point [properties](https://c3js.org/reference.html#point-show) |
  grid | Used to show, hide and modify the graph grid.  See [docs](https://c3js.org/reference.html#grid-x-show)
  legend | Show, hide and modify the legend position.  See [docs](https://c3js.org/reference.html#legend-show)
  tooltip | Show, hide and modify the tooltip.  See [docs](https://c3js.org/reference.html#tooltip-show)
  subchart | Show, hide and modify C3 sub charts.  See [docs](https://c3js.org/reference.html#subchart-show)
  zoom | Control and set C3 zoom features. See [docs](https://c3js.org/reference.html#zoom-enabled)
  size | Control hart size see [docs](https://c3js.org/reference.html#size-width) | size: {width: 640 }
  padding | Set padding around graph.  See docs(https://c3js.org/reference.html#padding-top)  | padding: { top: 20}
  title | Set chart title | title: { text: "This is my chart" }
  color* | Used to assign color [properties](https://c3js.org/reference.html#color-pattern). The chart colors are mutable after chart creation
  transition | Equivalent to [transition.duration](https://c3js.org/reference.html#transition-duration).  Default duration is 350ms
  unloadDataBeforeChange | When set to true the data will be unloaded before new data is loaded with didUpdateAttrs().  This is useful for pie and donut charts.  Can now also manage data loading with .load()/.unload() methods on exposed c3chart
  oninit | c3 chart event, see events section below | oninit=(action "init")
  onrendered | c3 chart event, see events section below | onrendered=(action "init")
  onmouseover | c3 chart event, see events section below | onmouseover=(action "mouseover")
  onmouseout | c3 chart event, see events section below | onmouseout=(action "mouseout")
  onresize | c3 chart event, see events section below | onresize=(action "resize")
  onresized | c3 chart event, see events section below | onresized=(action "resized")

### C3 Methods
If you assign a value to the c3chart property, you can use most of the C3 [methods](https://c3js.org/reference.html#api-focus) found in the documentation.  Not all the methods have been tested but all should work as documented.

templates/someroute.hbs
```
{{c3-chart data=mydata c3chart=chart}}

<button onclick={{action "loadUS"}}>US Cars</button>
<button onclikc={{action "loadGerman"}}>German Cars</button>
<button onclikc={{action "resetData"}}>Reset</button>
```

controllers/someroute.js
```js
import { later } from "@ember/runloop";
import Controller from "@ember/controller";
/* eslint ember/avoid-leaking-state-in-ember-objects: "off" */

export default Controller.extend({

 chart: null,

 baseData:   
    { 
      columns: [
        ["US", 64],
        ["German", 36]
      ],
      type: "donut"
    },
 
 modelsGerman: [
        ["Mercedes", 12],
        ["Volkswagon", 54],
        ["BMW", 34]
      ],

  modelsUS: [
    ["Ford", 35],
    ["Chevy", 26],
    ["Tesla", 2],
    ["Buick", 10],
    ["Dodge", 27]
  ],

  actions: {
     resetData() {
      let c = this.chart;
      c.unload();
      later(this, () => c.load({ columns: this.baseData }), 300);
    },

    loadUS() {
      let c = this.chart;
      c.load({ columns: this.modelsUS});
      c.unload("US", "German");
    },
       
    loadGerman() {
      let c = this.chart;
      c.load({ columns: this.modelsGerman});
      c.unload("US", "German");
    }
  }
});
```

### C3 Events
c3 emits two types of events - [chart](https://c3js.org/reference.html#oninit) and [data](https://c3js.org/reference.html#data-onclick) events.  Chart events can be assigned to an action via a property.  Data events must be assigned an action as part of the data object.  For connivence, the chart object is passed into all chart events.  An example of a chart and data event is shown below.  See the dummy app for more examples

templates/application.hbs
```hbs
{{c3-chart 
  data=data
  oninit=(action 'init')
  }}
  ```
controllers/application.js
```js
import Controller from "@ember/controller";
import { computed } from "@ember/object";
import { bind } from "@ember/runloop";

export default Controller.extend({
 data: computed(function() {
    // iris data from R
    return {
      columns: [
        ["data1", 30],
        ["data2", 120],
        ["data3", 10],
        ["data4", 45],
        ["data5", 90]
      ],
      type: "pie",
      onclick: bind(this, this.actions.onClick)
    };
  }),

 actions: {
    // oninit chart event
    init(chart){
      console.log("chart inited")
    },

    // data event - triggered when data point clicked
    onClick(d, i) {
      alert(`Data ${d.name} has a value of ${d.value}`)
    },
  }
});
```

### Helpful Links

- [Extending ember-c3 charts using base-component approach](https://medium.com/nimbo-x-development/extending-ember-c3-charts-using-base-component-approach-78df1d635050#.k8j8gnnqa)

## Development

* `git clone` this repository
* `npm install` or `yarn install`
* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

### Dummy app on gh-pages
Use `npm run deploy` to build and deploy dummy app to the gh-pages branch

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
