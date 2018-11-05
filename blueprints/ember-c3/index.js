module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    var self = this;

    return this.addBowerPackageToProject('d3', '3.5.17')
      .then(function() {
        return self.addBowerPackageToProject('c3')
          .then(function() {
            self.addAddonToProject('ember-c3-shim@0.0.6');
          });
      });
  }
};
