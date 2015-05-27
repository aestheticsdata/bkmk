// StatusBarController.js

angular.module('bkmk.controllers').controller('StatusBarController', StatusBarController);

function StatusBarController($scope, $log, $state, $stateParams) {

    $scope.statusbar = {
        status: $state.params.title
    };

}