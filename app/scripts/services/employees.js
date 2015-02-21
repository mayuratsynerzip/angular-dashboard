'use strict';

/**
 * @ngdoc service
 * @name dashboardApp.employees
 * @description
 * # employees
 * Service in the dashboardApp.
 */
angular.module('dashboardApp')
  .service('employees', ['$http', function ($http) {
    var service = {};
    service.baseUrl = "http://localhost:8000/";
    this.getAllEmployees = function(success){
      $http.get(service.baseUrl+'api/employee').success(function (emp) {
        success(emp);
      });
    }

    this.addEmployee = function(emp, success){
      $http.post(service.baseUrl+'api/employee',emp).success(function (emp) {
        success(emp);
      });
    }

  }]);
