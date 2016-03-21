'use strict';

angular.module('theFableHouseApp', [
  'theFableHouseApp.auth',
  'theFableHouseApp.admin',
  'theFableHouseApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
