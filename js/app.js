// app.js

angular.module('bkmk', ['ui.bootstrap', 'bkmk.directives', 'bkmk.controllers', 'bkmk.services', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {


        $stateProvider

            .state('home', {
                url         : '/home',
                templateUrl : 'partials/home.html',
                controller  : 'HomeController',
                params      : {title : 'Home'}
            })

            .state('admin', {
                url         : '/admin',
                templateUrl : 'partials/admin.html',
                controller  : 'AdminController',
                params      : {title : 'Admin'}
            })

            .state('about', {
                url         : '/about',
                templateUrl : 'partials/about.html',
                controller  : 'AboutController',
                params      : {title : 'About'}
            })

            .state('listall', {
                url         : '/listall',
                templateUrl : 'partials/listall.html',
                controller  : 'ListAllController',
                params      : {title : 'List All'}
            });

        $urlRouterProvider.otherwise('/home');
    })

    .run(function ($state) {
        $state.go('home');
    });