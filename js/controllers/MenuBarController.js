angular.module('bkmk.controllers').controller('MenuBarController',MenuBarController);

function MenuBarController($scope, DataService) {

    $scope.category = DataService.getCategory();
}