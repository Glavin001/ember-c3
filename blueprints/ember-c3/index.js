module.exports = {
  description: '',

  afterInstall: function() {
    var self = this;

    return this.addBowerPackageToProject('d3').then(function(){
      return self.addBowerPackageToProject('c3');
    });
  }
};
