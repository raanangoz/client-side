let app = angular.module('myApp', ["ngRoute"]);

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
        // other
        .otherwise({ redirectTo: '/' });
});