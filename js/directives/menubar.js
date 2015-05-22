// Menubar.js

angular.module('bkmk.directives').directive('menuBar', menuBar);

function menuBar() {
    return {
        restrict: 'E',
        templateUrl: '../templates/menubar.html'
    }
}