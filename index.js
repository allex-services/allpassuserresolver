function createServicePack(execlib) {
  'use strict';
  return {
    service: {
      dependencies: ['allex_userresolverservice']
    },
    sinkmap: {
      dependencies: ['allex_userresolverservice']
    }, /*
    tasks: {
      dependencies: []
    }
    */
  }
}

module.exports = createServicePack;
