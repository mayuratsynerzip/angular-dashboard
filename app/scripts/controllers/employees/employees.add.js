'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:EmployeesAddCtrl
 * @description
 * # EmployeesAddCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('EmployeesAddCtrl',['$scope', 'employees','$state', function ($scope, employees,$state) {
    $scope.jobTitleList = [
      'QA Automation Lead',
      'Javascript Developer',
      'Senior Architect',
      'Jr. software Developer',
      'Sr. Software Developer'
    ];

    $scope.addEmployee = function() {
      employees.addEmployee($scope.emp,  function(result){
        $state.transitionTo("employees.list");
      });
    };
  }]);
