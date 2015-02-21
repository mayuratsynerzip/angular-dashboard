'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:ProjectsViewCtrl
 * @description
 * # ProjectsViewCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('ProjectsViewCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
