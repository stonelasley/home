'use strict';

angular.module('stone', [
  'ngRoute',
  'stone.view1',
  'stone.view2',
  'stone.contact',
  'stone.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
