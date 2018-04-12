"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require("react-redux");

var _InfoWindow = require("../components/InfoWindow");

var _InfoWindow2 = _interopRequireDefault(_InfoWindow);

var _updateLocationSelect = require("../actions/updateLocationSelect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    onClick: function onClick() {
      return dispatch((0, _updateLocationSelect.selectLocation)(props.location));
    }
  };
};

var InfoWindowContainer = (0, _reactRedux.connect)(null, mapDispatchToProps)(_InfoWindow2.default);

exports.default = InfoWindowContainer;