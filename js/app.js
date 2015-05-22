// app.js

angular.module('bkmk', ['bkmk.directives', 'bkmk.controllers', 'bkmk.services', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {


        $stateProvider

            .state('home', {
                url         : '/home',
                templateUrl : 'partials/home.html',
                controller  : 'HomeController'
            });

        $urlRouterProvider.otherwise('/home');
    })

    .run(function ($state) {
        $state.go('home');
    });