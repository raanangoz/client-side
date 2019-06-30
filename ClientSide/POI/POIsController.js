// interestPoints controller
angular.module("myApp")
    .controller("POIsController", function ($scope,$http) {
        $scope.search = function () {

            var poiname = $scope.poiname

            var req = {
                method: 'GET',
                url: 'http://localhost:3000/get_poi/'+poiname,
                params: {
                    'poi_name': poiname
                }
            };
            $http(req)
                .then(function mySuccess(response) {
                    $scope.wantedPOI = response.data[0];
                }, function myError(response) {

                })
        };

        $scope.getPoi1 = function () {
            var req = {
                method: 'GET',
                url: 'http://localhost:3000/get_POIs/Culture',

                params: {
                    'categories': "Culture"
                }
            };
            $http(req)
                .then(function mySuccess(response) {
                    $scope.listOfPOIs1 = response.data;
                    $scope.listOfPOIsPICS1 = response.data;
                }, function myError(response) {
                    console.log("error");
                })
        };
        $scope.getPoi2 = function () {
            var req = {
                method: 'GET',
                url: 'http://localhost:3000/get_POIs/Food',

                data: {
                    categories: "Food"
                }
            };
            $http(req)
                .then(function mySuccess(response) {
                    $scope.listOfPOIs2 = response.data;
                    $scope.listOfPOIsPICS2 = response.data;
                }, function myError(response) {
                    console.log("error");
                })
        };
        $scope.getPoi3 = function () {
            var req = {
                method: 'GET',
                url: 'http://localhost:3000/get_POIs/Nightlife',

                data: {
                    categories: "Nightlife"
                }
            };
            console.log(req);
            $http(req)
                .then(function mySuccess(response) {
                    $scope.listOfPOIs3 = response.data;
                    $scope.listOfPOIsPICS3 = response.data;
                }, function myError(response) {
                    console.log("error");
                })
        };
        $scope.getPoi4 = function () {
            var req = {
                method: 'GET',
                url: 'http://localhost:3000/get_POIs/Shopping',

                data: {
                    categories: "Shopping"
                }
            };
            console.log(req);
            $http(req)
                .then(function mySuccess(response) {
                    $scope.listOfPOIs4 = response.data;
                    $scope.listOfPOIsPICS4 = response.data;
                }, function myError(response) {
                    console.log("error");
                })
        };

    });