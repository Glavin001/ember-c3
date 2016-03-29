/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-c3',
  included: function(app, parentAddon) {
    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      this.app = app = app.app;
    }
    this._super.included(app);

    var target = parentAddon || app;

    target.import(target.bowerDirectory + '/d3/d3.min.js');
    target.import(target.bowerDirectory + '/c3/c3.min.css');
    target.import(target.bowerDirectory + '/c3/c3.min.js');
  }
};
