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

  $scope.update = function(contact) {
    $scope.master = angular.copy(contact);
    $scope.reset();
  }


  $scope.reset = function () {
    $scope.contact = angular.copy($scope.master);
    $scope.confirmMessage = "Thank you";
  }

}]);