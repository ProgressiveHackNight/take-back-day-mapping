'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _modalStyles = require('../styles/javascript/modalStyles');

var _colors = require('../styles/javascript/colors');

var _TextReminderContainer = require('../containers/TextReminderContainer');

var _TextReminderContainer2 = _interopRequireDefault(_TextReminderContainer);

var _EmailReminderContainer = require('../containers/EmailReminderContainer');

var _EmailReminderContainer2 = _interopRequireDefault(_EmailReminderContainer);

var _ChooseReminder = require('./ChooseReminder');

var _ChooseReminder2 = _interopRequireDefault(_ChooseReminder);

var _displayReminderType = require('../helpers/displayReminderType');

var _displayReminderType2 = _interopRequireDefault(_displayReminderType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.handlePhoneButtonClick = function () {
      _this.setState({
        phoneButtonClicked: true,
        emailButtonClicked: false
      });
    };

    _this.handleEmailButtonClick = function () {
      _this.setState({
        emailButtonClicked: true,
        phoneButtonClicked: false
      });
    };

    _this.handleCloseClick = function () {
      _this.setState({
        phoneButtonClicked: false,
        emailButtonClicked: false
      });
    };

    _this.handleBackButtonClick = function () {
      _this.setState({
        phoneButtonClicked: null,
        emailButtonClicked: null
      });
    };

    _this.state = {
      phoneButtonClicked: null,
      emailButtonClicked: null
    };
    return _this;
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var visibleStyle = { display: 'block' };
      var hiddenStyle = { display: 'none' };

      var modalStyle = this.props.visible ? _modalStyles.modal : hiddenStyle;
      var phoneInputVisible = this.state.phoneButtonClicked && !this.state.emailButtonClicked;
      var emailInputVisible = this.state.emailButtonClicked && !this.state.phoneButtonClicked;
      var reminderTypeStyle = !this.state.phoneButtonClicked && !this.state.emailButtonClicked ? visibleStyle : hiddenStyle;
      var backButtonStyle = this.state.phoneButtonClicked || this.state.emailButtonClicked ? _modalStyles.plainButton : hiddenStyle;

      return _react2.default.createElement(
        'div',
        { style: modalStyle },
        _react2.default.createElement(
          'div',
          { className: 'modal-wrapper' },
          _react2.default.createElement(
            'div',
            {
              style: _modalStyles.closeButtonWrapper,
              onClick: function onClick() {
                _this2.props.onCloseClick();
                _this2.handleCloseClick();
                _this2.props.resetModal();
              }
            },
            _react2.default.createElement(
              'span',
              { style: _modalStyles.closeButton },
              '\xD7'
            )
          ),
          _react2.default.createElement(
            'p',
            { style: { color: _colors.DARK_GRAY } },
            'Get a ',
            (0, _displayReminderType2.default)(this.state),
            ' reminder to drop off at this location:'
          ),
          _react2.default.createElement(
            'h4',
            { style: _modalStyles.modalAddressStyles },
            this.props.location.location
          ),
          _react2.default.createElement(_ChooseReminder2.default, {
            sectionStyle: reminderTypeStyle,
            textButtonClick: this.handlePhoneButtonClick,
            emailButtonClick: this.handleEmailButtonClick
          }),
          _react2.default.createElement(_TextReminderContainer2.default, { location: this.props.location, visible: phoneInputVisible }),
          _react2.default.createElement(_EmailReminderContainer2.default, { location: this.props.location, visible: emailInputVisible }),
          _react2.default.createElement(
            'button',
            { style: backButtonStyle, onClick: this.handleBackButtonClick },
            'go back'
          )
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

exports.default = Modal;