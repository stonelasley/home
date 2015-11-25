'use strict';

describe('home module', function () {
  beforeEach(module('home'));

  describe('HomeCtrl', function () {
    it('should be defined', inject(function ($controller) {
      var $scope = {};
      $controller('HomeCtrl', { $scope: $scope });
      expect($controller).toBeDefined()
    }));
  });
});