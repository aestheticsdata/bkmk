// ListController.js

angular.module('bkmk.controllers').controller('ListController', ListController);

function ListController($scope, $log, $stateParams, ds) { // ds is DataService comming from ui-router state resolve

    $log.debug('ListController');

    //DataService.getData().success(function (data) {
    //
    //    $log.debug(data);
    //
    //    $scope.data = data;
    //});

    $log.debug('ds : ', ds.data);

    $scope.data = ds.data;

    $stateParams.category === 'all' ? $scope.isListAll = true : $scope.isCategory = true;

    $scope.tagSearching = false;

    // contrived function for returning two class. ng-class combining map array function is not working
    $scope.getClassName = function (idx) {
        return 'item-'+((idx%5)+1)+' '+(idx == highlightIndex ? 'highlight' : '');
    };

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

    $scope.displayFullTitle = function (title) {

        $log.debug(title);
        $scope.popupTitle = true;
        $scope.popupContent = title;
    };

    $scope.hidePopup = function () {

        $scope.popupTitle = false;
    };

    $scope.listView = true;

    var highlightIndex = -1;
    $scope.showHighlight = function (index) {
        highlightIndex = index;
    };
    $scope.hideHighlight = function (index) {
        highlightIndex = -1;
    };

    $scope.$watch('statusbar.viewType', function () {

        try {
            $scope.listView  = ($scope.statusbar.viewType === 'List');
            $scope.thumbView = !$scope.listView;
            //$scope.sortingOrder = $scope.statusbar.sortingOrder;
        } catch (e) {
            $log.debug('statusbar directive scope not ready');
        }

    });

}