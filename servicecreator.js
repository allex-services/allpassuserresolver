function createAllPassUserResolverService(execlib, ParentService) {
  'use strict';
  

  function factoryCreator(parentFactory) {
    return {
      'service': require('./users/serviceusercreator')(execlib, parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib, parentFactory.get('user')) 
    };
  }

  function AllPassUserResolverService(prophash) {
    prophash.skipdata = true;
    ParentService.call(this, prophash);
    this.resolvedrole = prophash.resolvedrole || 'user';
  }
  
  ParentService.inherit(AllPassUserResolverService, factoryCreator);
  
  AllPassUserResolverService.prototype.__cleanUp = function() {
    this.resolvedrole = null;
    ParentService.prototype.__cleanUp.call(this);
  };

  AllPassUserResolverService.prototype.isInitiallyReady = function () {
    return true;
  };
  
  return AllPassUserResolverService;
}

module.exports = createAllPassUserResolverService;
