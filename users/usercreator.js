function createUser(execlib, ParentUser) {
  'use strict';
  if (!ParentUser) {
    ParentUser = execlib.execSuite.ServicePack.Service.prototype.userFactory.get('user');
  }

  function User(prophash) {
    ParentUser.call(this, prophash);
  }
  
  ParentUser.inherit(User, require('../methoddescriptors/user'), [/*visible state fields here*/]/*or a ctor for StateStream filter*/);
  User.prototype.__cleanUp = function () {
    ParentUser.prototype.__cleanUp.call(this);
  };

  User.prototype.resolveUser = function (credentialshash, defer) {
    credentialshash = credentialshash || {};
    credentialshash.role = credentialshash.role || this.__service.resolvedrole;
    defer.resolve({
      name: credentialshash.username || 'user',
      role: credentialshash.role,
      profile: credentialshash
    });
  };

  User.prototype.fetchUser = function (credentialshash, defer) {
    return this.resolveUser(credentialshash, defer);
  };

  return User;
}

module.exports = createUser;
