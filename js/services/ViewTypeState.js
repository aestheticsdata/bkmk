// ViewTypeState.js

angular.module('bkmk.services').factory('ViewTypeState', ViewTypeState);

function ViewTypeState($log) {


    var vts = {
        viewtype: {
            LIST      : 'List',
            THUMBNAIL : 'Thumbnail'
        },
        getState  : _getState,
        setState  : _setState
    };

    var _state = (_state === undefined ? vts.viewtype.THUMBNAIL : _state);

    return vts;


    //  ┌─┐┬─┐┬┬  ┬┌─┐┌┬┐┌─┐  ┌┬┐┌─┐┌┬┐┬ ┬┌─┐┌┬┐┌─┐
    //  ├─┘├┬┘│└┐┌┘├─┤ │ ├┤   │││├┤  │ ├─┤│ │ ││└─┐
    //  ┴  ┴└─┴ └┘ ┴ ┴ ┴ └─┘  ┴ ┴└─┘ ┴ ┴ ┴└─┘─┴┘└─┘

    function _getState() {
        return _state;
    }

    function _setState(state) {

        $log.debug('setState : ', state);

        _state = state;
        return this;
    }
}