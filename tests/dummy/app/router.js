import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('gauge');
  this.route('timeseries');
  this.route('pie');
  this.route('donut');
});

export default Router;
