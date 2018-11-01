"use strict";

module.exports = {
  name: "ember-c3",
  included: function(app) {
    this._super.included(app);

    app.import('node_modules/c3/c3.css');
  
  }
};
