'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:OrganizationsAddCtrl
 * @description
 * # OrganizationsAddCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('OrganizationsAddCtrl',  ['$scope', '$state', 'organizations', function ($scope, $state, organizations) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.addOrganization = function() {
      organizations.addOrganization($scope.org, function(result){
        $state.transitionTo("organizations.list");
      });
    }
  }]);
