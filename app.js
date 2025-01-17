(function() {
  'use strict';

  angular.module('Assignment1App', [])
  .controller('Assignment1Controller', Assignment1Controller);

  Assignment1Controller.$inject = ['$scope'];

  var lunchItems = "";
  var lunchItemsSeparator = "";
  var itemsCount = 0;
  var countNumber = 0;

  // $scope = scope service
  function Assignment1Controller ($scope) {
    $scope.checkLunchItms = function() {
      //lunchItems = document.getElementById('lunchItems').value;

      if ($scope.lunchItems == "") {
        $scope.result = "Please enter data first";
      }
      else {
        $scope.lunchItems = $scope.lunchItems.split(',');

        /*for(var i=0; i < $scope.lunchItems.length; i++) {
          if (i < $scope.lunchItems.length - 1) lunchItemsSeparator = " | ";
          else lunchItemsSeparator = "";
          lunchItems = lunchItems + $scope.lunchItems[i] + lunchItemsSeparator;
        }
        $scope.lunchItems = "";
        $scope.lunchItems = lunchItems;*/

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
