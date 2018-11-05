"use strict";

module.exports = {
  name: "ember-c3",
  
  included: function(app) {
    this._super.included.apply(this, arguments);

    app.import("node_modules/c3/c3.css");
  }
};
