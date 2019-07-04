// interestPoints controller
angular.module("myApp")
    .controller("loginController", function ($scope,$http,$rootScope) {
        $scope.login = function () {
            var uname = $scope.uname;
            var password = $scope.password;

            // console.log(_username , _password);

            var req = {
                method: 'POST',
                url: 'http://localhost:3000/login',
                data: {
                    username: $scope.uname,
                    password: $scope.password
                }
            };
            $http(req)
                .then(function mySuccess(response) {
                    // console.log(response.data);
                    // $scope.result = response.data;

                    $rootScope.connected = true;
                    $rootScope.connectedUser = $scope.uname;
                    sessionStorage.setItem('connectedToken',response.data);
                    $rootScope.connectedToken = response.data;
                    sessionStorage.setItem('connectedUser',$scope.uname);
                }, function myError(response) {
                    // $scope.myWelcome = response.statusText;
                    window.alert("wrong details");
                    console.log("error in loginController");
                })
        };

    });