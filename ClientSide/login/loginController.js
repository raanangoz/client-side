// interestPoints controller
angular.module("myApp")
    .controller("loginController", function ($scope,$http) {
        $scope.login = function () {
            var uname = $scope.uname;
            var password = $scope.password;

            // console.log(_username , _password);

            var req = {
                method: 'POST',
                url: 'http://localhost:3000/login',
data: username=uname,
                // password=password;
            };
            $http(req)
                .then(function mySuccess(response) {
                    console.log(response.data);
                    $scope.result = response.data.token;

                }, function myError(response) {
                    // $scope.myWelcome = response.statusText;
                    console.log("error in loginController");
                })
        };

    });