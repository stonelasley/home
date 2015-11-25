'use strict';

angular.module('home', ['ui.router'])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/components/home/home.html',
        controller: 'HomeCtrl'
      })
  })

  .controller('HomeCtrl', ['$scope', function ($scope) {
  }]);