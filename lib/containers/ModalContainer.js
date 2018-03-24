'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _resetReminders = require('../actions/resetReminders');

var _resetReminders2 = _interopRequireDefault(_resetReminders);

var _Modal = require('../components/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getLocation = function getLocation(state) {
  return state.selectedLocation ? state.selectedLocation : { location: '' };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    location: getLocation(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    resetModal: function resetModal() {
      return dispatch((0, _resetReminders2.default)());
    }
  };
};

var ModalContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Modal2.default);

exports.default = ModalContainer;