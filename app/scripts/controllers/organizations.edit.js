'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:OrganizationsEditCtrl
 * @description
 * # OrganizationsEditCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('OrganizationsEditCtrl', ['$scope', '$stateParams', 'organizations', function ($scope, $stateParams, organizations) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.organization = organizations.getOrganizationById($stateParams.orgId);
    organizations.editOrganization($scope.organization);
  }]);
