// app.js

angular.module('bkmk', ['ui.bootstrap', 'bkmk.directives', 'bkmk.controllers', 'bkmk.services', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {


        $stateProvider

            .state('home', {
                url         : '/home',
                views       : {
                    'menubar' : {
                        templateUrl : 'partials/menubar/menubar.html',
                        controller  : 'MenuBarController'
                    },
                    'statusbar' : {
                        templateUrl : 'partials/statusbar/statusbar.html',
                        controller  : 'StatusBarController'
                    },
                    'content' : {
                        templateUrl : 'partials/home.html',
                        controller  : 'HomeController'
                    }
                },
                params      : {title : 'Home'}
            })

            .state('admin', {
                url         : '/admin',
                views       : {
                    'menubar' : {
                        templateUrl : 'partials/menubar/menubar.html',
                        controller  : 'MenuBarController'
                    },
                    'statusbar' : {
                        templateUrl : 'partials/statusbar/statusbar.html',
                        controller  : 'StatusBarController'
                    },
                    'content' : {
                        templateUrl : 'partials/admin.html',
                        controller  : 'AdminController'
                    }
                },
                params      : {title : 'Admin'}
            })

            .state('about', {
                url         : '/about',
                views       : {
                    'menubar' : {
                        templateUrl : 'partials/menubar/menubar.html',
                        controller  : 'MenuBarController'
                    },
                    'statusbar' : {
                        templateUrl : 'partials/statusbar/statusbar.html',
                        controller  : 'StatusBarController'
                    },
                    'content' : {
                        templateUrl : 'partials/about.html',
                        controller  : 'AboutController'
                    }
                },
                params      : {title : 'About'}
            })

            .state('list', {
                url         : '/list/:category',
                templateUrl : 'partials/list.html',
                controller  : 'ListController',
                params      : {title : 'List'},
                resolve     : {
                    ds: function (DataService) {
                        return DataService.getData().success(function (data) {
                            return data;
                        });
                    }
                }
            });

        $urlRouterProvider.otherwise('/home');
    })

    .run(function ($state) {
        $state.go('home');
    });