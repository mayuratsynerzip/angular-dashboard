'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:ProjectsAddCtrl
 * @description
 * # ProjectsAddCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('ProjectsAddCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
