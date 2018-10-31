module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    var self = this;

    return this.addBowerPackageToProject("d3", "5.7.0")
      .then(function() {
        return self.addBowerPackageToProject("c3")
          .then(function() {
            self.addAddonToProject("ember-c3-shim");
          });
      });
  }
};
