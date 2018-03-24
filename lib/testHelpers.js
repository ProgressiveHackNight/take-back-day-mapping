'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mountWithWrappers = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _reactRedux = require('react-redux');

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _configureStore = require('./configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mountWithWrappers = exports.mountWithWrappers = function mountWithWrappers(wrappedComponent) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _MuiThemeProvider2.default,
    null,
    _react2.default.createElement(
      _reactRedux.Provider,
      { store: (0, _configureStore2.default)(initialState) },
      wrappedComponent
    )
  ));
};