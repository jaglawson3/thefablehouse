'use strict';

angular.module('theFableHouseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('story', {
        url: '/story',
        template: '<story></story>'
      });
  });
