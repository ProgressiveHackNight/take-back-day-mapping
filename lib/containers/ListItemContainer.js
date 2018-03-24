'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _ListItem = require('../components/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _updateLocationSelect = require('../actions/updateLocationSelect');

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
    handleRsvpClick: function handleRsvpClick() {
      return dispatch((0, _updateLocationSelect.selectLocation)(props.location));
    },
    onHover: function onHover() {
      return dispatch((0, _handleHover.beginLocationHover)(props.location));
    },
    onHoverEnd: function onHoverEnd() {
      return dispatch((0, _handleHover.endLocationHover)());
    }
  };
};

var ListItemContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ListItem2.default);

exports.default = ListItemContainer;