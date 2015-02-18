'use strict';

angular.module('mean.widgets').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('widgets example page', {
      url: '/widgets/example',
      templateUrl: 'widgets/views/index.html'
    });
  }
]);
