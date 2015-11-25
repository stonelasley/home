'use strict';

angular.module('about', ['ui.router'])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'app/components/about/about.html',
        controller: 'AboutCtrl'
      })
  })

  .controller('AboutCtrl', ['$scope', function ($scope) {
  }]);