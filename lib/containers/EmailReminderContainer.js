'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _EmailReminder = require('../components/EmailReminder');

var _EmailReminder2 = _interopRequireDefault(_EmailReminder);

var _handleEmailInput = require('../actions/handleEmailInput');

var _handleEmailInput2 = _interopRequireDefault(_handleEmailInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isCompleted: state.reminders.email
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onClick: function onClick(input) {
      return dispatch((0, _handleEmailInput2.default)(input));
    }
  };
};

var EmailReminderContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_EmailReminder2.default);

exports.default = EmailReminderContainer;