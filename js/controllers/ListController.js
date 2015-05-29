// ListController.js

angular.module('bkmk.controllers').controller('ListController', ListController);

function ListController($scope, $log, $stateParams, DataService) {

    $log.debug('ListController');

    $scope.isActive = function (category) {

        return $stateParams.category === category;
    };


    $stateParams.category === 'all' ? $scope.isListAll = true : $scope.isCategory = true;

    DataService.getData().success(function (data) {

        $log.debug(data);

        $scope.data = data;
    });

}