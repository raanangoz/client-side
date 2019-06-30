// interestPoints controller
angular.module("myApp")
    .controller("RegisterController", function ($scope,$http,$rootScope) {
        $scope.showQuestions = function (){
            var req = {
                method: 'GET',
                url: 'http://localhost:3000/get_validation_questions'
            };
            $http (req).then(function mySuccess(response) {
                $scope.q0 = response.data[0];
                $scope.q1 = response.data[1];
                $scope.q2 = response.data[2];
                $scope.q3 = response.data[3];
            }, function myError(response) {
                $scope.result = response.data;

            })
        }

        $scope.register = function () {

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
                    interests: ["Culture","Food"],//TODO not really
                    questions: [$scope.q0,$scope.q1,$scope.q2,$scope.q3],//TODO
                    answers: [$scope.a0,$scope.a1,$scope.a2,$scope.a3]//TODO
                }

            };
            $http(req)
                .then(function mySuccess(response) {
                    $scope.result = response.data;
                }, function myError(response) {
                    console.log(response.data.statusText);
                    $scope.result = response.data;

                })
        }

    });