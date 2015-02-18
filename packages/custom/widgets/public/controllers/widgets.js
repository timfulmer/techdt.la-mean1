'use strict';

/* jshint -W098 */
angular.module('mean.widgets').controller('WidgetsController', ['$scope', 'Global', 'Widgets',
  function($scope, Global, Widgets) {
    $scope.global = Global;
    $scope.package = {
      name: 'widgets'
    };
  }
]);
