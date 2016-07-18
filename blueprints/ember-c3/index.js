module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    var self = this;

    return this.addBowerPackagesToProject([
      { name: 'd3', target: '3.5.17' }
    ]).then(function(){
      return self.addBowerPackageToProject('c3');
    });
  }
};
