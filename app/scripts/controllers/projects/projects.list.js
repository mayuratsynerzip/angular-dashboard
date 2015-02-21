'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:ProjectsListCtrl
 * @description
 * # ProjectsListCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('ProjectsListCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
