// Menubar.js

angular.module('bkmk.directives').directive('menuBar', menuBar);

function menuBar() {
    return {
        restrict    : 'E',
        templateUrl : '../js/directives/menubar/menubar.html',
        replace     : true,
        controller  : 'MenuBarController'
    }
}