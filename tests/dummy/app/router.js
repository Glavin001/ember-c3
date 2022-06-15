import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('gauge');
  this.route('timeseries');
  this.route('pie');
  this.route('donut');
  this.route('events');
  this.route('drilldown');
  this.route('chart-events');
  this.route('chart-obj');
  this.route('no-data');
  this.route('d3');
});
