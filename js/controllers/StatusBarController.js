// StatusBarController.js

angular.module('bkmk.controllers').controller('StatusBarController', StatusBarController);

function StatusBarController($scope, $log, $state, $stateParams) {

    $scope.statusbar = {
        status      : $state.params.title + ($stateParams.category !== undefined ? ' '+$stateParams.category : ''),
        searchbox   : false,
        viewButtons : false,
        viewType    : 'List'
    };

    ($state.params.title === 'List') && ($scope.statusbar.searchbox = true) && ($scope.statusbar.viewButtons = true);

}