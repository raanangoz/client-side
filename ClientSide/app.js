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

app.run(function($rootScope,$location) {
    $rootScope.connectedUser = 'guest';


    $rootScope.logout = function () {
        sessionStorage.removeItem('connectedUser');
        sessionStorage.removeItem('connectedToken');
        $rootScope.connectedUser = 'guest';
        console.log($rootScope.connectedUser);
        $rootScope.connectedToken = null;
        $rootScope.connected = false;


    };
});