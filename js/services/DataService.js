// DataService.js

angular.module('bkmk.services').factory('DataService', DataService);

function DataService($http) {

    var _category = ['Programming', 'JavaScript', 'Cuisine', '8bit', 'Divers', 'Sante', 'Jobs', 'Css', 'Fonts'];

    var ds = {
        getData     : _getData,
        getCategory : _getCategory
    };

    return ds;

    //  ┌─┐┬─┐┬┬  ┬┌─┐┌┬┐┌─┐  ┌┬┐┌─┐┌┬┐┬ ┬┌─┐┌┬┐┌─┐
    //  ├─┘├┬┘│└┐┌┘├─┤ │ ├┤   │││├┤  │ ├─┤│ │ ││└─┐
    //  ┴  ┴└─┴ └┘ ┴ ┴ ┴ └─┘  ┴ ┴└─┘ ┴ ┴ ┴└─┘─┴┘└─┘

    function _getData() {

        return $http.get('../fakedata/data.json');
    }

    function _getCategory() {

        return _category;
    }
}


