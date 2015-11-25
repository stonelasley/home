'use strict';

angular.module('stone', [
  'ui.router',
  'home',
  'contact',
  'about'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  });