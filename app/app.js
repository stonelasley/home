'use strict';

angular.module('stone', [
  'ui.router',
  'contact'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  });