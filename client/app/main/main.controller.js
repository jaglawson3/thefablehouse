'use strict';

(function() {

class MainController {
  constructor($http) {
    this.$http = $http;
    this.awesomeThings = [];
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }

}

angular.module('theFableHouseApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
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
