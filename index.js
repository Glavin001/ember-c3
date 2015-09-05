/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-c3',
  included: function(app) {
    this._super.included(app);

    app.import('bower_components/d3/d3.min.js');
    app.import('bower_components/c3/c3.min.css');
    app.import('bower_components/c3/c3.min.js');
  }
};
