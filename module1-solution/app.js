(function() {
  'use strict';

  angular.module('LunchCheckApp', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  // $scope = scope service
  function LunchCheckController ($scope) {
    $scope.checkLunchItms = function() {

      if (isEmptyOrNull($scope.lunchItems)) {
        $scope.result = "Please enter data first";
        $scope.textColor = 'red';
        $scope.borderRadius = '11px';
        $scope.border = '1px solid red';
        $scope.borderWidth = '325px';
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
          $scope.textColor = 'green';
          $scope.borderRadius = '11px';
          $scope.border = '1px solid green';
        }
        else {
          $scope.result = "Too much!";
          $scope.textColor = 'green';
          $scope.borderRadius = '11px';
          $scope.border = '1px solid green';
        }
      }
    }

    function isEmptyOrNull(value) {
      if (value === null || value === undefined) { return true; }
      if (typeof value === 'string' && value.trim() === '') { return true; }
      if (Array.isArray(value) && value.length === 0) { return true; }
      if (typeof value === 'object' && Object.keys(value).length === 0) { return true; }

      return false;
    }
  }
})();
