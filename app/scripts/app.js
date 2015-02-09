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
  $(document).click(function (event) {
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
        templateUrl: 'views/organizations.html',
        controller: 'OrganizationsCtrl',
        url: '/organizations'
      })
      .state('organizations.list', {
        templateUrl: 'views/organizations.list.html',
        controller: 'OrganizationsListCtrl',
        url: '/list'
      })
      .state('organizations.view', {
        templateUrl: 'views/organizations.view.html',
        controller: 'OrganizationsViewCtrl',
        url: '/view/:orgId'
      })
      .state('organizations.edit', {
        templateUrl: 'views/organizations.edit.html',
        controller: 'OrganizationsEditCtrl',
        url: '/edit/:orgId'
      })
      .state('organizations.add', {
        templateUrl: 'views/organizations.add.html',
        controller: 'OrganizationsAddCtrl',
        url: '/add'
      })
  })
/*  .run(function($state){
    $state.go('dashboard');
  });*/
