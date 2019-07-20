// interestPoints controller
angular.module("myApp")
    .controller("favoritesController", function ($scope,$http,$rootScope) {
        $scope.showFavoritesNumber = function () {

            var req = {
                method: 'GET',
                url: 'http://localhost:3000/private/get_favoritePOIs',
                headers: {
                    'x-auth-token': $rootScope.connectedToken,
                    'content-type': 'application/json'
                }


            };
            $http(req)
                .then(function mySuccess(response) {

                    console.log(response.data.length);

                    // $scope.result = response.data;

                    $scope.counter = response.data.length;



                }, function myError(response) {
                    // $scope.myWelcome = response.statusText;
                    // console.log(response);
                })
        }
        $scope.showAllFavorites = function () {
            console.log($rootScope.connectedToken);
            var req = {
                method: 'GET',
                url: 'http://localhost:3000/private/get_FavoritePOIs',
                headers: {
                    'x-auth-token': $rootScope.connectedToken,
                    'content-type': 'application/json'
                }

            };
            $http(req)
                .then(function mySuccess(response) {
                    $scope.result = response.data;


                }, function myError(response) {
                    // $scope.myWelcome = response.statusText;
                    // console.log(response);
                })

        }
        $scope.sort = function () {
            if($scope.result!=null) {//TODO CHECK IF WHEN LENGTH 0 ITS NULL
                let array = $scope.result;
                var method = document.getElementById("sortBy");
                method = selected_method(method);

                if(method == 'Category') {
                    console.log("original order:");
                    array.forEach(function (entry) {
                        console.log(entry.Category_name);
                    });


                    array = sortFavByCat(array);
                    console.log("after sort order:");
                    array.forEach(function (entry) {
                        console.log(entry.Category_name);
                    });
                }else if(method == 'Rating') {
                    console.log("original order:");
                    array.forEach(function (entry) {
                        console.log(entry.Rank);
                    });


                    array = sortFavByRating(array);
                    console.log("after sort order:");
                    array.forEach(function (entry) {
                        console.log(entry.Rank);
                    });
                }
                $scope.result = array;
            }
            else{
                window.alert("Nothing to sort");
            }
        }
        function selected_method(method) {
            for (let i = 0; i < method.length; i++) {
                if (method[i].selected == true) {
                    return method[i].label;
                }
            }
        }

        function sortFavByCat(array){

            for(let i = 0; i < array.length-1; ++i) {
                for (let j = i + 1; j < array.length; ++j) {

                    if (array[i].Category_name>array[j].Category_name) {
                        let temp = array[i];
                        array[i] = array[j];
                        array[j] = temp;
                    }
                }
            }
            return array;
        }
        function sortFavByRating(array){
            for(let i = 0; i < array.length-1; ++i) {
                for (let j = i + 1; j < array.length; ++j) {

                    if (array[i].Rank>array[j].Rank) {
                        let temp = array[i];
                        array[i] = array[j];
                        array[j] = temp;
                    }
                }
            }
            return array;

        }
        $scope.showDetails= function (x) {
            window.alert("name: " + x.name +"\n" + "description: " + x.Description +"\n" + "views: " + x.view_amount +"\n" + "category: " + x.Category_name + "\n" + "rating: "+x.Rank +"\n");

        };
    })