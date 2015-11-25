'use strict';

describe('contact module', function () {
  beforeEach(module('contact'));

  describe('ContactCtrl', function () {
    it('should be defined', inject(function ($controller) {
      var $scope = {};
      $controller('ContactCtrl', { $scope: $scope });
      expect($controller).toBeDefined()
    }));
  });
});