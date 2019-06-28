// interestPoints controller
angular.module("myApp")
    .controller("RegisterController", function ($scope,$http,$rootScope) {
        $scope.register = function () {
            // var _username = $scope.username;
            // var _password = $scope.password;

            // console.log(_username , _password);

            var req = {
                method: 'POST',
                url: 'http://localhost:3000/register',
                data: {
                    username: $scope.uname,
                    firstname: $scope.fname,
                    lastname: $scope.lname,
                    city: $scope.city,
                    country: $scope.country,
                    email: $scope.email,
                    password: $scope.password,
                    interests: ["Culture","Food"]//TODO not really
                }

            };
            $http(req)
                .then(function mySuccess(response) {
                    $scope.result = response.data;
                }, function myError(response) {
                    $scope.result = response.data;

                })
        }

    });