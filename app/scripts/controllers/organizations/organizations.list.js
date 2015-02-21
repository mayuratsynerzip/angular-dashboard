'use strict';
angular.module('dashboardApp')
  .controller('OrganizationsListCtrl', ['$scope', '$state', 'organizations', function ($scope, $state, organizations) {
    organizations.getAllOrganizations(function(orgs){
      $scope.organizations = orgs;
    });
  }]);
