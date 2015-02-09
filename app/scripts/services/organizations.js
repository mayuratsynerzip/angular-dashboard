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
    service.baseUrl = "http://localhost:8000"
    var organizations = [
      {
        id: 101,
        name: 'Starks',
        owner: {
          id: 1,
          name: 'Hemant Elhance'
        },
        noOfPeople: 30,
        billableCount: 23,
        benchCount: 7
      },
      {
        id: 102,
        name: 'Synerzip',
        owner:  {
          id: 1,
          name: 'Hemant Elhance'
        },
        noOfPeople: 30,
        billableCount: 23,
        benchCount: 7

      },
      {
        id: 103,
        name: 'Odesk',
        owner:  {
          id: 1,
          name: 'Hemant Elhance'
        },
        noOfPeople: 30,
        billableCount: 23,
        benchCount: 7

      },
      {
        id: 104,
        name: 'Belkin',
        owner:  {
          id: 1,
          name: 'Hemant Elhance'
        },
        noOfPeople: 30,
        billableCount: 23,
        benchCount: 7
      }
    ];
    this.getAllOrganizations = function(success){
      $http.get(service.baseUrl+'/api/organization').success(function (org) {
        console.log(org);
        success(org);
      });
    }

    this.getOrganizationById = function(orgId, success) {
      $http.get(service.baseUrl+'/api/organization/'+orgId).success(function (result) {
        success(result);
      });
    }

    this.editOrganization = function(org) {

    }

    this.addOrganization = function(org , success) {
      $http.post(service.baseUrl+'/api/organization', org).success(function (result) {
        success(result);
      });
    }
  }]);
