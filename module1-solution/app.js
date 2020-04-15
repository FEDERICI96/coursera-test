(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    
    .controller('controller', controller);
    controller.$inject = ['$scope'];
    
    function controller($scope) {
        $scope.message = "";
        $scope.input = "";
        $scope.parse = function() {

            var inputArray = $scope.input.split(',');
            for(var i = inputArray.length - 1; i >= 0; i--) {
                if(inputArray[i] == "" || inputArray[i] == " ") {
                    inputArray.splice(i, 1);
                }
            }

            if ($scope.input == "" || $scope.input == " ") {
                $scope.message = "Please enter data first"
            }
            else if (inputArray.length <= 3) {$scope.message = "Enjoy!"}
            else {$scope.message = "Too much!"}

        }
    }
    
})();