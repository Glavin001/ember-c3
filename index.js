'use strict';

module.exports = {
  name: 'ember-c3',
  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/d3/d3.min.js');
    app.import(app.bowerDirectory + '/c3/c3.min.css');
    app.import(app.bowerDirectory + '/c3/c3.min.js');
  }
};
