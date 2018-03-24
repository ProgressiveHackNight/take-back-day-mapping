'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

require('./styles/css/index.css');

var _registerServiceWorker = require('./registerServiceWorker');

var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);

var _TakeBackMapComponent = require('./TakeBackMapComponent');

var _TakeBackMapComponent2 = _interopRequireDefault(_TakeBackMapComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_TakeBackMapComponent2.default, null), document.getElementById('root'));

(0, _registerServiceWorker2.default)();