'use strict';
(function() {

  class StoryComponent {
    constructor($scope, $http) {
      this.$scope = $scope;
      var scope = this.$scope;
      this.$http = $http;
      this.$scope.Introduction = true;
      console.log('getting JSON');
      this.$http.get('assets/images/story_tree.json').then(response => {
        console.log('got JSON');
        this.$scope.currentPage = response.data;
        console.log(response.data);
      });
      scope.currentPage = {
        currentLocation: '',
        src: '',
        text : '',
        currentQuestion: '',
        buttonLeft: '',
        buttonRight: '',
        optionLeft: { },
        optionRight: { }
      };
      $scope.videoUrl = function (input) {
        var src = '/assets/images/' + input;
        console.log(src);
        return src;
      };
      $scope.optionLeft = function () {
        scope.currentPage= scope.currentPage.optionLeft;
        if (scope.currentPage.end) {
          scope.end = true;
        }
      };
      $scope.optionRight = function () {
        scope.currentPage = scope.currentPage.optionRight;
        if (scope.currentPage.end) {
          scope.end = true;
        }
      };
      $scope.isItIntroduction = function () {
        scope.currentPage = scope.currentPage['0'];
        scope.Introduction = false;
        console.log(scope.Introduction);
      };
    }
  }

  angular.module('theFableHouseApp')
    .component('story', {
      templateUrl: 'app/story/story.html',
      controller: StoryComponent
    })
    .directive('video', function () {
      return {
        restrict: 'E',
        link: function(scope, element) {
          scope.$on('$destroy', function() {
            element.prop('src', '');
          });
        }
      };
    });
})();
