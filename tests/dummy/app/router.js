import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('gauge');
  this.route('timeseries');
  this.route('pie');
  this.route('donut');
  this.route('events');
  this.route('drilldown');
});

export default Router;
