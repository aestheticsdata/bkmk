// HomeController.js

angular.module('bkmk.controllers').controller('HomeController', HomeController);

function HomeController($scope, $log) {

    $log.debug('HomeController');

    $scope.isHome = true;
}