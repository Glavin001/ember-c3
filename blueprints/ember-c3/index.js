module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {

    return this.addBowerPackageToProject("d3", "5.7.0")
      .then(() => {
        return this.addBowerPackageToProject("c3")
          .then(() => {
            this.addAddonToProject("ember-c3-shim");
          });
      });
  }
};
