'use strict';

angular.module('contact', ['ui.router'])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/components/contact/contact.html',
        controller: 'ContactCtrl'
      })
  })

  .controller('ContactCtrl', ['$scope', function ($scope) {
    $scope.master = {};
    $scope.confirmMessage;

    $scope.update = function (contact) {
      $scope.master = angular.copy(contact);
      $scope.reset();
    }


    $scope.reset = function () {
      $scope.contact = angular.copy($scope.master);
      $scope.confirmMessage = "Thank you";
    }

  }]);