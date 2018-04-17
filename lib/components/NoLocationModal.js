"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _TextReminderContainer = require("../containers/TextReminderContainer");

var _TextReminderContainer2 = _interopRequireDefault(_TextReminderContainer);

var _EmailReminderContainer = require("../containers/EmailReminderContainer");

var _EmailReminderContainer2 = _interopRequireDefault(_EmailReminderContainer);

var _modalStyles = require("../styles/javascript/modalStyles");

var _colors = require("../styles/javascript/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoLocationModal = function NoLocationModal(_ref) {
  var reminderType = _ref.reminderType,
      isActive = _ref.isActive,
      onClose = _ref.onClose,
      onSubmit = _ref.onSubmit;

  var visibleStyle = { display: "block" };
  var hiddenStyle = { display: "none" };

  var modalStyle = isActive ? _modalStyles.modal : hiddenStyle;
  var modalIsTextType = reminderType === "text";
  var modalText = modalIsTextType ? "Get a text reminder." : "Get an email reminder.";
  var modalForm = modalIsTextType ? _react2.default.createElement(_TextReminderContainer2.default, { visible: true, isCompleted: false }) : _react2.default.createElement(_EmailReminderContainer2.default, { visible: true, isCompleted: false });

  return _react2.default.createElement(
    "div",
    { style: modalStyle },
    _react2.default.createElement(
      "div",
      { className: "modal-wrapper" },
      _react2.default.createElement(
        "div",
        {
          style: _modalStyles.closeButtonWrapper,
          onClick: function onClick() {
            onClose();
          }
        },
        _react2.default.createElement(
          "span",
          { style: _modalStyles.closeButton },
          "\xD7"
        )
      ),
      _react2.default.createElement(
        "h4",
        { style: _modalStyles.modalHeader },
        modalText
      ),
      _react2.default.createElement(
        "p",
        { style: { color: _colors.DARK_GRAY, lineHeight: "28px", maxWidth: 350 } },
        "You'll receive a note on Take Back Day reminding you to clear your cabinets."
      ),
      modalForm
    )
  );
};

exports.default = NoLocationModal;