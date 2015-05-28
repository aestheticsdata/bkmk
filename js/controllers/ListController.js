// ListController.js

angular.module('bkmk.controllers').controller('ListController', ListController);

function ListController($scope, $log, $stateParams) {

    $log.debug('ListController');

    $scope.isActive = function (category) {

        return $stateParams.category === category;
    };

    $scope.fakeData = [
      'JavaScript', 'Cuisine', '8bit', 'Divers'
    ];

    $stateParams.category === 'all' ? $scope.isListAll = true : $scope.isCategory = true;

}