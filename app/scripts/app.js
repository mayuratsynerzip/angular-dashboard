'use strict';

/**
 * @ngdoc overview
 * @name dashboardApp
 * @description
 * # dashboardApp
 *
 * Main module of the application.
 */
$(document).ready(function () {
  $(document).click(function () {
    var _opened = $("#myNavBar").hasClass("in");
    if (_opened === true/* && !clickover.hasClass("navbar-toggle")*/) {
      $("button.navbar-toggle").click();
    }
    return false;
  });
});
angular
  .module('dashboardApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/dashboard");
    $stateProvider
      .state('dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        url: '/dashboard'
      })
      .state('organizations', {
        templateUrl: '../views/organizations/organizations.html',
        controller: 'OrganizationsCtrl',
        url: '/organizations'
      })
      .state('organizations.list', {
        templateUrl: '../views/organizations/organizations.list.html',
        controller: 'OrganizationsListCtrl',
        url: '/list'
      })
      .state('organizations.view', {
        templateUrl: '../views/organizations/organizations.view.html',
        controller: 'OrganizationsViewCtrl',
        url: '/view/:orgId'
      })
      .state('organizations.edit', {
        templateUrl: '../views/organizations/organizations.edit.html',
        controller: 'OrganizationsEditCtrl',
        url: '/edit/:orgId'
      })
      .state('organizations.add', {
        templateUrl: '../views/organizations/organizations.add.html',
        controller: 'OrganizationsAddCtrl',
        url: '/add'
      })
      .state('projects', {
        templateUrl: '../views/projects/projects.html',
        controller: 'ProjectsCtrl',
        url: '/projects'
      })
      .state('projects.list', {
        templateUrl: '../views/projects/projects.list.html',
        controller: 'ProjectsListCtrl',
        url: '/list'
      })
      .state('projects.add', {
        templateUrl: '../views/projects/projects.add.html',
        controller: 'ProjectsAddCtrl',
        url: '/add'
      })
      .state('projects.view', {
        templateUrl: '../views/projects/projects.view.html',
        controller: 'ProjectsViewCtrl',
        url: '/view'
      })
      .state('projects.edit', {
        templateUrl: '../views/projects/projects.edit.html',
        controller: 'ProjectsEditCtrl',
        url: '/edit'
      })
      .state('employees', {
        templateUrl: '../views/employees/employees.html',
        controller: 'EmployeesCtrl',
        url: '/employees'
      })
      .state('employees.list', {
        templateUrl: '../views/employees/employees.list.html',
        controller: 'EmployeesListCtrl',
        url: '/list'
      })
      .state('employees.add', {
        templateUrl: '../views/employees/employees.add.html',
        controller: 'EmployeesAddCtrl',
        url: '/add'
      })
      .state('employees.view', {
        templateUrl: '../views/employees/employees.view.html',
        controller: 'EmployeesViewCtrl',
        url: '/view'
      })
      .state('employees.edit', {
        templateUrl: '../views/employees/employees.edit.html',
        controller: 'EmployeesEditCtrl',
        url: '/edit'
      })
  });
