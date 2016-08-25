function createClientSide(execlib) {
  'use strict';
  var execSuite = execlib.execSuite,
    ParentServicePack = execSuite.registry.get('allex_userresolverservice');

  return {
    SinkMap: require('./sinkmapcreator')(execlib, ParentServicePack)
  };
}

module.exports = createClientSide;
