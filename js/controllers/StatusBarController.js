// StatusBarController.js

angular.module('bkmk.controllers').controller('StatusBarController', StatusBarController);

function StatusBarController($scope, $log, $state, $stateParams, ViewTypeState) {

    $scope.statusbar = {
        status             : $state.params.title + ($stateParams.category !== undefined ? ' '+$stateParams.category : ''),
        searchbox          : false,
        viewButtons        : false,
        dateOrderingButton : false,
        viewType           : ViewTypeState.getState(),
        stateChange        : ViewTypeState.setState,
        tag                : '',
        sortingOrder       : false,
        reverseDateOrder   : function () {this.sortingOrder = !this.sortingOrder;},
        getSortingOrder    : function () {return this.sortingOrder;},
        getOrderName       : function () {return this.sortingOrder ? 'asc' : 'desc'}
    };


    if ($state.params.title === 'List') {
        $scope.statusbar.searchbox = true;
        $scope.statusbar.viewButtons = true;
        $scope.statusbar.dateOrderingButton = true;
    }
}