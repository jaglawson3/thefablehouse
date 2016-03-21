'use strict';

angular.module('theFableHouseApp.auth', [
  'theFableHouseApp.constants',
  'theFableHouseApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
