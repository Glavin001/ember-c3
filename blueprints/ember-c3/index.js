module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    var self = this;

    return this.addBowerPackageToProject([{
        name: 'd3', target: '3.5.17'
    }]).then(function(){
      return self.addBowerPackageToProject('c3').then(function(){
        return self.addAddonToProject('ember-c3-shim@0.0.6');
      });
    });
  }
};
