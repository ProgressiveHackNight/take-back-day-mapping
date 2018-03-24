'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _TextReminder = require('../components/TextReminder');

var _TextReminder2 = _interopRequireDefault(_TextReminder);

var _handlePhoneInput = require('../actions/handlePhoneInput');

var _handlePhoneInput2 = _interopRequireDefault(_handlePhoneInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isCompleted: state.reminders.text
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onPhoneButtonClick: function onPhoneButtonClick(input) {
      return dispatch((0, _handlePhoneInput2.default)(input));
    }
  };
};

var TextReminderContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_TextReminder2.default);

exports.default = TextReminderContainer;