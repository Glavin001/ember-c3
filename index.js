"use strict";

module.exports = {
  name: "ember-c3",
  included: function(app) {
    this._super.included(app);

    app.import({
      production: app.bowerDirectory + "/d3/d3.min.js",
      development: app.bowerDirectory + "/d3/d3.js",
      test: app.bowerDirectory + "/d3/d3.js"
    });
    app.import({
      production: app.bowerDirectory + "/c3/c3.min.css",
      development: app.bowerDirectory + "/c3/c3.css",
      test: app.bowerDirectory + "/c3/c3.css"
    });
    app.import({
      production: app.bowerDirectory + "/c3/c3.min.js",
      development: app.bowerDirectory + "/c3/c3.js",
      test: app.bowerDirectory + "/c3/c3.js"
    });
  }
};
