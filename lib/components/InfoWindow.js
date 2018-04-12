'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _infoWindowStyles = require('../styles/javascript/infoWindowStyles');

var _buttons = require('../styles/javascript/buttons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfoWindow = function InfoWindow(_ref) {
  var location = _ref.location,
      onClick = _ref.onClick,
      onCloseClick = _ref.onCloseClick;

  return _react2.default.createElement(
    'div',
    { style: _infoWindowStyles.infoWindowStyle },
    _react2.default.createElement(
      'div',
      { style: _infoWindowStyles.infoContainer },
      _react2.default.createElement(
        'div',
        { style: _infoWindowStyles.infoContent },
        _react2.default.createElement(
          'div',
          { style: _infoWindowStyles.infoHeader },
          _react2.default.createElement(
            'h4',
            { style: _infoWindowStyles.infoText },
            location.name
          ),
          _react2.default.createElement(
            'span',
            { style: _infoWindowStyles.infoCloseButton, onClick: onCloseClick },
            '\xD7'
          )
        ),
        _react2.default.createElement(
          'p',
          { style: _infoWindowStyles.infoText },
          location.location
        )
      ),
      _react2.default.createElement(
        'button',
        { style: _buttons.plainButton, onClick: onClick },
        'get reminder'
      )
    )
  );
};

exports.default = InfoWindow;