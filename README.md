[ember-c3](https://github.com/Glavin001/ember-c3)
==========

> Ember component library for [C3, a D3-based reusable chart library](https://github.com/masayuki0812/c3).

## Usage

### Install with Bower

```bash
bower install --save ember-c3
```

Include library's script in your application:

```html
<script src="bower_components/ember-c3/build/lib.js"></script>
```

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

After cloning repository, install library dependencies.

```bash
npm install
bower install
```

Then build with `grunt`.

```bash
grunt serve
```
