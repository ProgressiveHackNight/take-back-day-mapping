"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require("react-redux");

var _ListView = require("../components/ListView");

var _ListView2 = _interopRequireDefault(_ListView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    searchInput: state.searchInput
  };
};

var ListViewContainer = (0, _reactRedux.connect)(mapStateToProps)(_ListView2.default);

exports.default = ListViewContainer;