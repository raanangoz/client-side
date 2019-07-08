// interestPoints controller
angular.module("myApp")
    .controller("restorePasswordController", function ($scope,$http,$rootScope) {
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


        $scope.get_validation_questions = function () {
            var req = {
                method: 'Get',
                url: 'http://localhost:3000/get_retrieval_questions_for_user/'+$scope.uname,
                params: {
                    "username": $scope.uname
                }
            };
            $http(req)
                .then(function mySuccess(response) {
                    if(response.data.questions[0]!=null) {
                        console.log(response.data.questions[0]);
                        $scope.submitted = true;
                        $scope.allUserQuestions = response.data.questions;//TODO for each

                    }
                    else{
                        $scope.submitted = false;
                        window.alert("try another username");
                    }
                }, function myError(response) {
                    console.log(response);
                })
        };


        function selected_question(Questions) {
            for (let i = 0; i < Questions.length; i++) {
                if (Questions[i].selected == true) {
                    return i; //Questions[i].label;
                }
            }
        }

        $scope.getPassword = function (){
            console.log($scope.answer);
            console.log($scope.question);
            var req = {
                method: 'post',
                url: 'http://localhost:3000/validate_usernames_answers',
                data:{
                    username:$scope.uname,
                    question:$scope.question,
                    answer:$scope.answer
                }
            };
            $http (req).then(function mySuccess(response) {
                window.alert("your password is:\n"+response.data.password);
            }, function myError(response) {
                window.alert(response.data);

            })
        }
    });

