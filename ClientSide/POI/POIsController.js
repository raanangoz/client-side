// interestPoints controller
angular.module("myApp")
    .controller("POIsController", function ($scope,$http,$rootScope) {
        $scope.initAllPOIsList = function () {


            var req = {
                method: 'GET',
                url: 'http://localhost:3000/get_POIs',

            };
            $http(req)
                .then(function mySuccess(response) {
                    $scope.listOfPOIs = response.data.poi_ids;
                }, function myError(response) {
                     $scope.myWelcome = response.statusText;
                })
        };
        $scope.getPOIsByCategories = function () {

        }

    });