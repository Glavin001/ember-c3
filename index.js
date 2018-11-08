"use strict";
var path = require("path");
var Funnel = require("broccoli-funnel");
var MergeTrees = require("broccoli-merge-trees");

module.exports = {
  name: require("./package").name,

  included: function(app) {
    this._super.included.apply(this, arguments);
    app.import("vendor/c3.css");
  },

  treeForVendor(vendorTree) {
    let cssTree = new Funnel(
      path.join(this.project.root, "node_modules", "c3"),
      {
        files: ["c3.css"]
      }
    );

    return new MergeTrees([vendorTree, cssTree]);
  }
};
