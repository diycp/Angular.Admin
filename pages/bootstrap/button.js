define(['angular', 'app.admin', 'angular-cookies'], function (angular, app) {
    app.controller('app.bootstrap.button', function ($scope) {
        $scope.singleModel = 1;
        $scope.radioModel = 'Middle';
        $scope.checkModel = {
            left: false,
            middle: true,
            right: false
        };
        $scope.checkResults = [];
        $scope.$watchCollection('checkModel', function () {
            $scope.checkResults = [];
            angular.forEach($scope.checkModel, function (value, key) {
                if (value) {
                    $scope.checkResults.push(key);
                }
            });
        });
    });
});