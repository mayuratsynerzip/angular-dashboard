'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:EmployeesListCtrl
 * @description
 * # EmployeesListCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('EmployeesListCtrl', ['$scope', 'employees', function ($scope , employees) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    employees.getAllEmployees(function(emps){
      $scope.employees = emps;
      console.log(emps);
    });
  }]);
