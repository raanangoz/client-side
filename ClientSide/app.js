let app = angular.module('myApp', ["ngRoute"]);
let connectedToken = null;
let connectedUser = null;
// config routes
app.config(function($routeProvider)  {
    $routeProvider
    //todo
    // .when('/', {
    //     // this is a template
    //     template: '<h1>This is the default route</h1>'
    // })
    // about
        .when('/about', {
            // this is a template url
            templateUrl: 'about/about.html',
            controller : 'aboutController as abtCtrl'
        })
        // poi
        .when('/POI', {
            templateUrl: 'POI/POIs.html',
            controller : 'POIsController as POIsController'
        })
        .when('/httpRequest', {
            templateUrl: 'pages/http/request.html',
            controller : 'httpController as httpCtrl'
        })
        .when('/Register', {
            templateUrl: 'Register/Register.html',
            controller : 'RegisterController as RegisterController'
        })

        .when('/login', {
            templateUrl: 'login/login.html',
            controller : 'loginController as loginController'
        })
        .when('/favorites', {
            templateUrl: 'favorites/favorites.html',
            controller : 'favoritesController as favoritesController'
        })
        .when('/restorePassword', {
            templateUrl: 'restorePassword/restorePassword.html',
            controller : 'restorePasswordController as restorePasswordController'
        })
        // other
        .otherwise({ redirectTo: '/' });
});



app.run(function($rootScope,$http) {//TODO move to another page and change all to $scope
    $rootScope.connectedUser = 'guest';


    $rootScope.logout = function () {
        sessionStorage.removeItem('connectedUser');
        sessionStorage.removeItem('connectedToken');
        $rootScope.connectedUser = 'guest';
        console.log($rootScope.connectedUser);
        $rootScope.connectedToken = null;
        $rootScope.connected = false;


    };
    $rootScope.getRandom3pois = function(){
        var req = {
            method: 'GET',
            url: 'http://localhost:3000/get_3_random_popular_pois',

        };
        $http(req)
            .then(function mySuccess(response) {
                var items = null;
                if(response.data.length >= 3) {
                    var itemx = null;
                    var itemy = null;
                    var itemz = null;
                    let x = Math.floor(Math.random() * response.data.length);
                    itemx = response.data[x];
                    let y=-1;
                    let z=-1;
                    while(true){
                        y = Math.floor(Math.random() * response.data.length);
                        if (y!==x) {
                            itemy = response.data[y];
                            break;
                        }
                    }
                    while(true){
                        z = Math.floor(Math.random() * response.data.length);
                        if (z!==x && z!==y) {
                            itemz = response.data[z];
                            break;
                        }
                    }
                    items = Array (itemx,itemy,itemz);
                }
                else{

                }

                $rootScope.result = items;


            }, function myError(response) {

                console.log(response);
            })

    }
    $rootScope.homepageConnectedPois = function(){
        var c0,c1 = null;
        var req = {
            method: 'GET',
            url: 'http://localhost:3000/private/get_userInterests',
            headers: {
                'x-auth-token': $rootScope.connectedToken,
                'content-type': 'application/json'
            }

        };
        $http(req)
            .then(function mySuccess(response) {
                c0 = response.data[0].Category_name;
                c1 = response.data[1].Category_name;
                getCategoryMostPopularPOI(c0);
                getCategoryMostPopularPOI(c1);




            }, function myError(response) {

                console.log(response);
            })



    }
     $rootScope.getCategoryMostPopularPOI= function(c) {

        if (c != null) {

            var req1 = {
                method: 'GET',
                url: 'http://localhost:3000/get_POIs/' + c,
                params: {
                    categories: c
                }

            };
            $http(req1)
                .then(function mySuccess(response) {
                    console.log(response);
                        $rootScope.connectedUserHomepagePOIs= findMaxRank(response.data);

                    }
                    , function myError(response) {
                        console.log(response.data)
                    })

        }

    };
    function findMaxRank(interestPointsOfCategory){
        var len = interestPointsOfCategory.length, max = -Infinity;
        while (len--) {
            if (interestPointsOfCategory[len].Rank > max) {
                max = interestPointsOfCategory[len];
            }
        }
        console.log(max);
        return max;

    };


});

