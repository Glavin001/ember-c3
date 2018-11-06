"use strict";
const pjson = require("../package.json");

module.exports = function(/* environment, appConfig */) {
  let ENV = {
    APP: {
      // version info for dummy app
      appVersion: pjson.version
    }
  };

  return ENV;
};
