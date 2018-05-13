'use strict';

module.exports = {
  name: 'ember-c3',
  included: function(app) {
    this._super.included(app);

    app.import({
      production: 'node_modules/c3/c3.min.css',
      development: 'node_modules/c3/c3.css',
      test: 'node_modules/c3/c3.css'
    });
  }
};
