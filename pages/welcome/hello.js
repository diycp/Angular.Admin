define(['app.admin', 'ng-tags-input'], function (app) {
    app.useModule('ngTagsInput');
    app.controller('app.welcome', function ($scope, $http) {
        $scope.message = '别着急嘛 ... ^_^ ... Angluar.Admin 正在工厂加班加点进行拼装...';
        $scope.countries = [
            {"name": "Algeria", "flag": "Algeria.png", "confederation": "CAF", "rank": 21},
            {"name": "Argentina", "flag": "Argentina.png", "confederation": "CONMEBOL", "rank": 5},
            {"name": "Australia", "flag": "Australia.png", "confederation": "AFC", "rank": 32},
            {"name": "Belgium", "flag": "Belgium.png", "confederation": "UEFA", "rank": 11},
            {"name": "Bosnia and Herzegovina", "flag": "Bosnia-and-Herzegovina.png", "confederation": "UEFA", "rank": 20},
            {"name": "Brazil", "flag": "Brazil.png", "confederation": "CONMEBOL", "rank": 3},
            {"name": "Cameroon", "flag": "Cameroon.png", "confederation": "CAF", "rank": 30},
            {"name": "Chile", "flag": "Chile.png", "confederation": "CONMEBOL", "rank": 14},
            {"name": "Colombia", "flag": "Colombia.png", "confederation": "CONMEBOL", "rank": 8},
            {"name": "Costa Rica", "flag": "Costa-Rica.png", "confederation": "CONCACAF", "rank": 24},
            {"name": "Croatia", "flag": "Croatia.png", "confederation": "UEFA", "rank": 17}
        ];
        $http.get('server/list.json').success(function (res) {
            $scope.users = res;
        });
        $scope.data = {
            input: 'input',
        };
    });


});