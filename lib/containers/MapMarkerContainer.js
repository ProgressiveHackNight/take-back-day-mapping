'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _MapMarker = require('../components/MapMarker');

var _MapMarker2 = _interopRequireDefault(_MapMarker);

var _handleHover = require('../actions/handleHover');

var _isHoveredLocation = require('../selectors/isHoveredLocation');

var _isHoveredLocation2 = _interopRequireDefault(_isHoveredLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    hover: (0, _isHoveredLocation2.default)(state, props.location)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    onHover: function onHover() {
      return dispatch((0, _handleHover.beginLocationHover)(props.location));
    },
    onHoverEnd: function onHoverEnd() {
      return dispatch((0, _handleHover.endLocationHover)());
    }
  };
};

var MapMarkerContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_MapMarker2.default);

exports.default = MapMarkerContainer;