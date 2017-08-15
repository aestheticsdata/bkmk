// HomeController.js

angular.module('bkmk.controllers').controller('HomeController', HomeController);

function HomeController($scope, $log, DataService) {

    $log.debug('HomeController');

    $scope.isHome = true;

    DataService.getData().then(function (data) {

        $log.debug(data);

        $scope.data = data;
    });

    $scope.isHeadline = function (post) {
        return post.weight === 'headline';
    };
}