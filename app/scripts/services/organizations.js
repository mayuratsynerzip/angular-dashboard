'use strict';

/**
 * @ngdoc service
 * @name dashboardApp.organizations
 * @description
 * # organizations
 * Service in the dashboardApp.
 */
angular.module('dashboardApp')
  .service('organizations', ['$http', function ($http) {
    var service = {};
    service.baseUrl = 'http://localhost:8000';
    this.getAllOrganizations = function(success){
      var orgs = [];
      $http.get(service.baseUrl+'/api/organization').success(function (org) {
        success(org);
      });
    };

    this.getOrganizationById = function(orgId, success) {
      $http.get(service.baseUrl+'/api/organization/'+orgId).success(function (result) {
        success(result);
      });
    };

    this.editOrganization = function(org) {

    };

    this.addOrganization = function(org , success) {
      var tempowner = org.owner;
      org.owner = tempowner._id;
      console.log(org);
      $http.post(service.baseUrl+'/api/organization', org).success(function (result) {
        success(result);
      });
    };
  }]);
