'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:OrganizationsViewCtrl
 * @description
 * # OrganizationsViewCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('OrganizationsViewCtrl', ['$scope','$stateParams','organizations',function ($scope, $stateParams, organizations) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    organizations.getOrganizationById($stateParams.orgId, function(org){
      $scope.organization = org;
    });
  }]);
