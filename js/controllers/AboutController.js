// AboutController.js

angular.module('bkmk.controllers').controller('AboutController', AboutController);

function AboutController($scope, $log) {

    $log.debug('AboutController');

    $scope.isAbout = true;

    $scope.loaded = false;

    $scope.$on('$viewContentLoaded', function(event) {
        $scope.loaded = true;
    });
}