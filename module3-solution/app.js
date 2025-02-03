(function() {
  'use strict';

  angular.module('...App', [])
  .controller('...Controller', ...Controller)
  //.service('...Service', ...Service);

  ...Controller.$inject = ['$scope'];



  // $scope = scope service
  function ...Controller ($scope) {  }

  ...Controller.$inject = ['...Service'];
  function ...Controller (...Service) {
    var a = this;
  }
})();
