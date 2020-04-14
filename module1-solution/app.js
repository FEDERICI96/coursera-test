(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    
    .controller('controller', controller);
    controller.$inject = ['$scope'];
    
    function controller($scope) {
        $scope.message = "";
        $scope.input = "";
        $scope.parse = function() {
            if ($scope.input == "" || $scope.input == " ") {
                $scope.message = "Please enter data first"
            }

        }
    }
    
})();