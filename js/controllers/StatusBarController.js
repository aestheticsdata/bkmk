// StatusBarController.js

angular.module('bkmk.controllers').controller('StatusBarController', StatusBarController);

function StatusBarController($scope, $log, $state, $stateParams) {

    $scope.statusbar = {
        status      : $state.params.title,
        searchbox   : false,
        viewButtons : false,
        viewType    : 'List'
    };

    ($state.params.title === 'List All') && ($scope.statusbar.searchbox = true) && ($scope.statusbar.viewButtons = true);

}