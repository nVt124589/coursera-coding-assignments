(function() {
  'use strict';

  angular.module('LunchCheckApp', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  // $scope = scope service
  function LunchCheckController ($scope) {
    $scope.checkLunchItms = function() {

      if ($scope.lunchItems == "") {
        $scope.result = "Please enter data first";
      }
      else {
        $scope.lunchItems = $scope.lunchItems.split(',');

        var itemsCount = 0;
        var countNumber = 0;

        for(var i=0; i < $scope.lunchItems.length; i++) {
          if ($scope.lunchItems[i].trim() == "") countNumber = 0;
          else countNumber = 1;

          itemsCount = itemsCount + countNumber;
        }

        if(itemsCount <= 3) {
          $scope.result = "Enjoy!";
        }
        else {
          $scope.result = "Too much!";
        }
      }
    }
  }
})();
