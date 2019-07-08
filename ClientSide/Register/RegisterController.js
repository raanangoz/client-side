// interestPoints controller
angular.module("myApp")
    .controller("RegisterController", function ($scope,$http,$rootScope) {
        var q0;
        var q1;
        var q2;
        var q3;
        $scope.showQuestions = function (){
            var req = {
                method: 'GET',
                url: 'http://localhost:3000/get_validation_questions'
            };
            $http (req).then(function mySuccess(response) {
                q0=response.data[0].que_description;
                q1=response.data[1].que_description;
                q2=response.data[2].que_description;
                q3=response.data[3].que_description;
                $scope.q0 = response.data[0];
                $scope.q1 = response.data[1];
                $scope.q2 = response.data[2];
                $scope.q3 = response.data[3];
            }, function myError(response) {
                $scope.result = response.data;

            })
        }

        $scope.register = function () {
            var Questions = document.getElementById("questions");
            var Questions1 = selected_question(Questions)
            // console.log(Questions1);
            var array = [];
            if($scope.interest1 == true)
                array.push("Culture");
            if($scope.interest2 == true)
                array.push("Food");
            if($scope.interest3 == true)
                array.push("Nightlife");
            if($scope.interest4 == true)
                array.push("Shopping");


            var Country = document.getElementById("country");
            Country = selected_country(Country);

            var req = {
                method: 'POST',
                url: 'http://localhost:3000/register',
                data: {
                    username: $scope.uname,
                    firstname: $scope.fname,
                    lastname: $scope.lname,
                    city: $scope.city,
                    country: Country,
                    email: $scope.email,
                    password: $scope.password,
                    interests: array,//TODO not really
                    questions: [q0,q1,q2,q3],//TODO
                    answers: [$scope.answers]//TODO
                }
            };
            $http(req)
                .then(function mySuccess(response) {
                    console.log(response.data);
                }, function myError(response) {
                    window.alert(response.data);
                })
        };

        $scope.get_countries = function () {
            var req = {
                method: 'Get',
                url: 'http://localhost:3000/get_countries'
                //headers: {
                //   'content-type': 'application/json'
                // },
            };
            $http(req)
                .then(function mySuccess(response) {
                    $scope.listOfCountries = response.data;
                }, function myError(response) {
                    console.log(response);
                })
        };

        function selected_country(Country) {
            for (let i = 0; i < Country.length; i++) {
                if (Country[i].selected == true) {
                    return Country[i].label;
                }
            }
        }

        $scope.get_validation_questions = function () {
            var req = {
                method: 'Get',
                url: 'http://localhost:3000/get_validation_questions'
                //headers: {
                //   'content-type': 'application/json'
                // },
            };
            $http(req)
                .then(function mySuccess(response) {
                    //console.log(req);
                    $scope.listOfQuestions = response.data;
                    //console.log(listOfCountries);
                    //console.log(response.data);

                }, function myError(response) {
                    console.log(response);
                })
        };


        function selected_question(Questions) {
            let questions = [];
            for (let i = 0; i < Questions.length; i++) {
                if (Questions[i].selected == true) {
                    questions.push(Questions[i]);

                }
            }
            return questions;
        }
    });

