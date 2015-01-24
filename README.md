
[Ember-C3](https://github.com/Glavin001/ember-c3)
==========

> Ember component library for [C3, a D3-based reusable chart library](https://github.com/masayuki0812/c3).

**Live Demo:** http://glavin001.github.io/ember-c3/dist/

Alternatively take a look at [Ember-NVD3](https://github.com/Glavin001/ember-nvd3) for your charting needs.

---

## Usage

### Install with npm

`npm install ember-c3 --save-dev`

### Run the generator

`ember g ember-c3`

### Using the Ember Component

#### Basic

Where `model` is your C3 data:

```handlebars
{{c3-chart data=model}}
```

#### Advanced

See http://c3js.org/examples.html for examples of how to use C3.

```handlebars
{{c3-chart
  data=model
  axis=axis
  regions=regions
  bar=bar
  pie=pie
  donut=donut
  grid=grid
  legend=legend
  tooltip=tooltip
  subchart=subchart
  zoom=zoom
  size=size
  padding=padding
  color=color
  transition=transition
  }}
```

## Developing

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
