// StatusBarController.js

angular.module('bkmk.controllers').controller('StatusBarController', StatusBarController);

function StatusBarController($scope, $log, $state, $stateParams, ViewTypeState) {

    $scope.statusbar = {
        status           : $state.params.title + ($stateParams.category !== undefined ? ' '+$stateParams.category : ''),
        searchbox        : false,
        viewButtons      : false,
        viewType         : ViewTypeState.getState(),
        stateChange      : ViewTypeState.setState,
        tag              : '',
        sortingOrder     : false,
        reverseDateOrder : function () {this.sortingOrder = !this.sortingOrder;},
        getSortingOrder  : function () {return this.sortingOrder;}
    };

    ($state.params.title === 'List') && ($scope.statusbar.searchbox = true) && ($scope.statusbar.viewButtons = true);

}