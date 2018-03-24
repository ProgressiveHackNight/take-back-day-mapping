'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inputStyle = {
  width: '98%',
  borderRadius: 60,
  border: '1px solid #dedede',
  lineHeight: 2.5,
  paddingLeft: 20,
  fontSize: 14,
  letterSpacing: '0.05em',
  marginBottom: 10
};

var SearchField = function SearchField(_ref) {
  var value = _ref.value,
      handleChange = _ref.handleChange;

  return _react2.default.createElement('input', {
    style: inputStyle,
    id: 'phone-field',
    type: 'text',
    name: 'phone-input',
    value: value,
    onChange: handleChange,
    placeholder: 'city, zip, or location name'
  });
};

exports.default = SearchField;