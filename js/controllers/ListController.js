// ListController.js

angular.module('bkmk.controllers').controller('ListController', ListController);

function ListController($scope, $log, $stateParams, DataService, $timeout) {

    $log.debug('ListController');

    DataService.getData().success(function (data) {

        $log.debug(data);

        $scope.data = data;
    });

    $stateParams.category === 'all' ? $scope.isListAll = true : $scope.isCategory = true;

    $scope.isActive = function (category) {

        return $stateParams.category === category;
    };

    $scope.isSelectedCategory = function (post) {

        return $stateParams.category === 'all' ? true : $stateParams.category === post.category;
    };

    $scope.selectByTag = function (post) {

        var tagAvailable = false,
            post_tags_length = post.tags.length;

        for (var i=0; i<post_tags_length; i++) {
            // if filter tag input is empty or match a tag then display something
            (post.tags[i] === $scope.statusbar.tag || $scope.statusbar.tag === '') && (tagAvailable = true);
        }

        return tagAvailable;
    };


    $scope.listView = true;


    $scope.$watch('statusbar.viewType', function () {

        try {
            $scope.listView  = ($scope.statusbar.viewType === 'List');
            $scope.thumbView = !$scope.listView;
        } catch (e) {
            $log.debug('statusbar directive scope not ready');
        }

    });

}