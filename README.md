# Ember-C3

[![npm version](https://badge.fury.io/js/ember-c3.svg)](http://badge.fury.io/js/ember-c3)
[![Ember Observer Score](https://emberobserver.com/badges/ember-c3.svg)](https://emberobserver.com/addons/ember-c3)
[![Join the chat at https://gitter.im/Glavin001/ember-c3](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Glavin001/ember-c3?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Ember component library for
[C3, a D3-based reusable chart library](https://github.com/masayuki0812/c3).

**See the demo [here](http://glavin001.github.io/ember-c3/)**
## Compatibility

* Ember.js v3.13 or above
* Ember CLI v3.24 or above
* Node.js v12 or above
* ember-auto-import >= 2 (BREAKING CHANGE!)
* Embroider compatabile

## Installation

```shell
ember install ember-c3
```

## Usage

Component usage and properties are [below](#basic). The code for these example
charts and more is in the
[dummy app source code](https://github.com/Glavin001/ember-c3/tree/master/tests/dummy/app).

---

| Combination                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- |
| ![image](https://cloud.githubusercontent.com/assets/1885333/9792404/4e750a06-57b6-11e5-96c1-8a6cabdef4ac.png) |

| Timeseries                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------- |
| ![ember-c3-timeseries-4](https://cloud.githubusercontent.com/assets/1885333/9792600/6032061c-57b7-11e5-9a2c-80e680d274a5.gif) |

| Gauge                                                                                                                    | Pie                                                                                                                    | Donut                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| ![ember-c3-gauge-2](https://cloud.githubusercontent.com/assets/1885333/9792503/c7ebc05a-57b6-11e5-8d43-116e9dd7c368.gif) | ![ember-c3-pie-1](https://cloud.githubusercontent.com/assets/1885333/9792639/8f90f5ee-57b7-11e5-859c-9a083255df4a.gif) | ![ember-c3-donut-1](https://cloud.githubusercontent.com/assets/1885333/9792665/ad4a6ee4-57b7-11e5-90d4-df152b24e4a3.gif) |

### Basic

Where `this.model` is your C3 data and chart options:

```handlebars
<C3Chart @data={{this.model}} />
```

### Advanced

See http://c3js.org/examples.html for examples of how to use C3.

### Component Arguments

The arguments match the corresponding C3 options found in the
[C3 Documentation](https://c3js.org/gettingstarted.html#generate). As
documented, most C3 settings (i.e. bar, axis, size, etc) can be included in the
data object.

Arguments break out the settings to simplify chart configuration. Note: The
chart type **must be** assigned in the chart `data` object.

Properties marked with an asterisk (\*) will update the chart when the property
changes. See examples in the dummy app.

| Property               | Description                                                                                                                                                                                                                                 | Example                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| c3chart                | Assigns the generated C3 chart object to the passed property. Any C3 API method can be used with this property                                                                                                                              | chart.hide("data1")                 |
| data\*                 | C3 data [object](https://c3js.org/gettingstarted.html#generate). `data` is mutable after the chart is created                                                                                                                               |                                     |
| axis\*                 | C3 axis [object](https://c3js.org/reference.html#axis-rotated). See C3 examples for combining with data object. Chart axis are mutable after the chart is created                                                                           |                                     |
| bar                    | Used to assign bar chart [properties](https://c3js.org/reference.html#bar-width)                                                                                                                                                            |                                     |
| pie                    | Used to assign pie chart [properties](https://c3js.org/reference.html#pie-label-show)                                                                                                                                                       |                                     |
| donut                  | Used to assign donut chart [properties](https://c3js.org/reference.html#donut-label-show)                                                                                                                                                   |                                     |
| gauge                  | Used to assign gauge chart [properties](https://c3js.org/reference.html#gauge-label-show)                                                                                                                                                   |                                     |
| line                   | Used to assign line chart [properties](https://c3js.org/reference.html#line-connectNull)                                                                                                                                                    |                                     |
| area                   | Used to assign area chart [properties](https://c3js.org/reference.html#area-zerobased)                                                                                                                                                      |                                     |
| point                  | Used to assign data point [properties](https://c3js.org/reference.html#point-show)                                                                                                                                                          |                                     |
| grid                   | Used to show, hide and modify the graph grid. See [docs](https://c3js.org/reference.html#grid-x-show)                                                                                                                                       |                                     |
| legend                 | Show, hide and modify the legend position. See [docs](https://c3js.org/reference.html#legend-show)                                                                                                                                          |                                     |
| tooltip                | Show, hide and modify the tooltip. See [docs](https://c3js.org/reference.html#tooltip-show)                                                                                                                                                 |                                     |
| subchart               | Show, hide and modify C3 sub charts. See [docs](https://c3js.org/reference.html#subchart-show)                                                                                                                                              |                                     |
| zoom                   | Set C3 zoom features. See [docs](https://c3js.org/reference.html#zoom-enabled)                                                                                                                                                              |                                     |
| size                   | Control chart size. See [docs](https://c3js.org/reference.html#size-width)                                                                                                                                                                  | size: {width: 640 }                 |
| padding                | Set padding around graph. See [docs](https://c3js.org/reference.html#padding-top)                                                                                                                                                           | padding: { top: 20}                 |
| title                  | Set chart title                                                                                                                                                                                                                             | title: { text: "This is my chart" } |
| interaction            | Enable or disable [interactions](https://c3js.org/reference.html#interaction-enabled)                                                                                                                                                       | interaction: { enabled: false }     |
| color\*                | Used to assign color [properties](https://c3js.org/reference.html#color-pattern). Chart colors are mutable after chart creation                                                                                                             |                                     |
| dtitle                 | Dynamically change the chart title. See details below                                                                                                                                                                                       |                                     |
| transition             | Equivalent to [transition.duration](https://c3js.org/reference.html#transition-duration). Default duration is 350ms. Transition times less than 300ms may not render properly. Use chart.load() and .unload() if shorter times are required |                                     |
| unloadDataBeforeChange | When set to true existing data will be unloaded before new data is loaded. Useful for pie and donut chart data changes. You can manually load/unload data using chart.load() and chart..unload()                                            |

### dtitle

The `dtitle` property is used to dynamically change a chart's title. C3 doesn't
natively support this without forcing a chart redraw which can cause side
effects.

The title can be set by targeting the `.c3-title` class but that doesn't provide
abstraction from C3's internals.

`dtitle` gives you some control over side effects using a parameter to control
how the graph is refreshed. An object with the new title and a `refresh`
parameter is used to indicate whether all properties should be refreshed or only
the chart title.

Setting `refresh` to false will only refresh the title and ignore changes to the
data, colors and axis properties. A short example is below. See the drill down
example in the dummy app to see how `dttile` is used and potential side effects.

The chart's initial title is set using the `title` parameter.

```handlebars
<C3Chart
  @data={{this.graphData}}
  @title={{this.title}}
  @dtitle={{this.dtitle}}
/>

<button {{on 'click' this.changeTitle}}>Change Title</button>
```

```javascript
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked title = { text: 'Coffee Brewing' };
  @tracked dtitle;

  get graphData() {
    return {
      columns: [
        ['Cold Brewed', 12],
        ['Drip', 67],
        ['French Press', 14],
        ['Iced', 38],
        ['Percolated', 64]
      ],
      type: 'pie'
    };
  }

  @action
  changeTitle() {
    this.dtitle = { text: 'Making coffee!', refresh: false };
  }
}
```

### C3 Methods

If you assign a controller property to the c3chart property, you can use most of
C3's api [methods](https://c3js.org/reference.html#api-focus). Not all the
methods have been tested.

```handlebars
{{! templates/application.hbs }}
<C3Chart @data={{this.baseData}} @c3chart={{this.chart}} />

<button {{on 'click' this.loadUS}}>US Cars</button>
<button {{on 'click' this.loadGerman}}>German Cars</button>
<button {{on 'click' this.resetData}}>Reset</button>
```

```javascript
// controllers/application.js
import { action } from '@ember/object';
import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  chart = null;

  baseData = {
    columns: [
      ['US', 64],
      ['German', 36]
    ],
    type: 'donut'
  };

  modelsGerman = [
    ['Mercedes', 12],
    ['Volkswagon', 54],
    ['BMW', 34]
  ];

  modelsUS = [
    ['Ford', 35],
    ['Chevy', 26],
    ['Tesla', 2],
    ['Buick', 10],
    ['Dodge', 27]
  ];

  @action
  resetData() {
    this.chart.load(this.baseData);
    this.chart.unload([
      'Mercedes',
      'Volkswagon',
      'BMW',
      'Ford',
      'Chevy',
      'Tesla',
      'Buick',
      'Dodge'
    ]);
  }

  @action
  loadUS() {
    this.chart.load({ columns: this.modelsUS });
    this.chart.unload('US', 'German');
  }

  @action
  loadGerman() {
    this.chart.load({ columns: this.modelsGerman });
    this.chart.unload('US', 'German');
  }
}
```

### C3 Events

C3 emits two types of events - [chart](https://c3js.org/reference.html#oninit)
and [data](https://c3js.org/reference.html#data-onclick) events. Chart events
are assigned callback functions using component arguments.

Data events **must** be assigned to an `action` in the data object.

Chart events supported by `ember-c3`.

| Events      | Description                                 | Example                         |
| ----------- | ------------------------------------------- | ------------------------------- |
| oninit      | Triggered when chart is initialized         | @oninit={{this.init}}           |
| onrendered  | Triggered when chart is rendered or redrawn | @onrendered={{this.render}}     |
| onmouseover | Triggered when mouse enters the chart       | @onmouseover={{this.mouseover}} |
| onmouseout  | Triggered when mouse leaves the chart       | @onmouseout={{this.mouseout}}   |
| onresize    | Triggered when screen is resized            | @onresize={{this.resize}}       |
| onresized   | Triggered when resizing is completed        | @onresized={{this.resized}}     |

Callback functions will receive the `C3` chart object which can be used to
modify the chart or as data source for other operations. The `@oninit` event
does not receive the chart object because the chart has not been created yet.
See the chart events example can be used in the dummy app.

C3 data events such as `onclick`, `onmouseover` and `onmouseout` are assgined
callback functions in the chart configuration or data settings. Data events
supply the data names and values based on mouse location.

A data event example is shown below. Note that data callbacks require `bind`.
See the dummy app for more examples.

```handlebars
{{! templates/application.hbs }}
<C3Chart @data={{this.data}} @oninit={{this.setup}} />
```

```javascript
// controllers/application.js
import { action } from '@ember/object';
import Controller from '@ember/controller';
import { bind } from '@ember/runloop';

export default class ApplicationController extends Controller {
  get data() {
    // iris data from R
    return {
      columns: [
        ['data1', 30],
        ['data2', 120],
        ['data3', 10],
        ['data4', 45],
        ['data5', 90]
      ],
      type: 'pie',
      // override component onclick event handler
      // bind is required for data events
      onclick: bind(this, this.onClick)
    };
  }

  // oninit chart event
  @action
  setup() {
    console.log('chart inited');
  }

  // data event - triggered when pie slice is clicked
  onClick(data, elem) {
    alert(`Data ${data.name} has a value of ${data.value}`);
  }
}
```

### Accessing D3

You can use the D3 library in your application by importing it where needed

```javascript
import d3 from 'd3';
```

See the D3
[example](https://github.com/Glavin001/ember-c3/blob/master/tests/dummy/app/controllers/d3.js)
in the dummy app.

### Helpful Links

- [Extending ember-c3 charts using base-component approach](https://medium.com/nimbo-x-development/extending-ember-c3-charts-using-base-component-approach-78df1d635050#.k8j8gnnqa)

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
