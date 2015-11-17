'use strict';

angular.module('stone.version', [
  'stone.version.interpolate-filter',
  'stone.version.version-directive'
])

.value('version', '0.1');
