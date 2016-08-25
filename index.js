function createServicePack(execlib) {
  'use strict';
  return {
    service: {
      dependencies: ['allex:userresolver']
    },
    sinkmap: {
      dependencies: ['allex:userresolver']
    }, /*
    tasks: {
      dependencies: []
    }
    */
  }
}

module.exports = createServicePack;
