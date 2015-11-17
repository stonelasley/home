'use strict';

describe('stone.version module', function() {
  beforeEach(module('stone.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
