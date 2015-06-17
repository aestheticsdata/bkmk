// AdminController.js

angular.module('bkmk.controllers').controller('AdminController', AdminController);

function AdminController($scope, $log) {

    $log.debug('AdminController');

    $scope.isAdmin = true;

    $scope.login = function () {

        var user = document.querySelector('#userfield').value,
            pass = document.querySelector('#passfield').value;


        console.log('sign in');

        $state.go();
    }
}