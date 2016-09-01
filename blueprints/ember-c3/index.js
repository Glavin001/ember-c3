module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    var self = this;

    return this.addBowerPackageToProject('d3').then(function(){
      return self.addBowerPackageToProject('c3').then(function(){
        return self.addAddonToProject('ember-c3-shim@0.0.6');
      });
    });
  }
};
