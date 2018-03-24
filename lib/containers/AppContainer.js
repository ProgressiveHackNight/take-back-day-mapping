'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _App = require('../components/App');

var _App2 = _interopRequireDefault(_App);

var _updateLocationSelect = require('../actions/updateLocationSelect');

var _handleLocationFetch = require('../actions/handleLocationFetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    selectedLocation: state.selectedLocation,
    locations: state.locations
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onCloseClick: function onCloseClick() {
      return dispatch((0, _updateLocationSelect.unselectLocation)());
    },
    fetchLocations: function fetchLocations() {
      return dispatch((0, _handleLocationFetch.handleLocationFetch)());
    }
  };
};

var AppContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_App2.default);

exports.default = AppContainer;