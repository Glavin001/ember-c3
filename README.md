# Ember-C3 

[![npm version](https://badge.fury.io/js/ember-c3.svg)](http://badge.fury.io/js/ember-c3)
[![Join the chat at https://gitter.im/Glavin001/ember-c3](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Glavin001/ember-c3?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
 
> Ember component library for [C3, a D3-based reusable chart library](https://github.com/masayuki0812/c3).

**Live Demo:** http://glavin001.github.io/ember-c3/

Alternatively take a look at [Ember-NVD3](https://github.com/Glavin001/ember-nvd3) for your charting needs.

---

## Installation

```bash
ember install ember-c3
```

## Usage

For a complete example, see the [dummy test app in `tests/dummy/app/`](https://github.com/Glavin001/ember-c3/tree/master/tests/dummy/app).

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

```handlebars
{{c3-chart
  data=model
  axis=axis
  regions=regions
  bar=bar
  pie=pie
  donut=donut
  gauge=gauge
  grid=grid
  legend=legend
  tooltip=tooltip
  subchart=subchart
  zoom=zoom
  point=point
  line=line
  area=area
  size=size
  padding=padding
  color=color
  transition=transition
}}
```

### Helpful Links

- [Extending ember-c3 charts using base-component approach](https://medium.com/nimbo-x-development/extending-ember-c3-charts-using-base-component-approach-78df1d635050#.k8j8gnnqa)

## Development

* `git clone` this repository
* `npm install`
* `bower install`
* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

## Publishing to GitHub Pages

See https://github.com/poetic/ember-cli-github-pages

```bash
ember github-pages:commit --message "Your commit message"
```
