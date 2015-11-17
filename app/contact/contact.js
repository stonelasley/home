'use strict';

angular.module('stone.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', ['$scope', function($scope) {
  $scope.master = {};
  $scope.confirmMessage;

  $scope.update = function(user) {
    $scope.master = angular.copy(user);
    $scope.reset();
  }


  $scope.reset = function () {
    $scope.user = angular.copy($scope.master);
    $scope.confirmMessage = "Thank you";
  }

}]);