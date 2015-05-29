// Statusbar.js

angular.module('bkmk.directives').directive('statusBar', statusBar);

function statusBar() {
    return {
        restrict    : 'E',
        templateUrl : '../js/directives/statusbar/statusbar.html',
        replace     : true,
        scope       : false,
        controller  : 'StatusBarController'
    }
}