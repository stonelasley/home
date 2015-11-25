'use strict';

describe('about module', function () {
  beforeEach(module('about'));

  describe('AboutCtrl', function () {
    it('should be defined', inject(function ($controller) {
      var $scope = {};
      $controller('AboutCtrl', { $scope: $scope });
      expect($controller).toBeDefined()
    }));
  });
});