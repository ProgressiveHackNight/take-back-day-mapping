'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _SearchField = require('../components/SearchField');

var _SearchField2 = _interopRequireDefault(_SearchField);

var _handleSearchInput = require('../actions/handleSearchInput');

var _handleSearchInput2 = _interopRequireDefault(_handleSearchInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    value: state.searchValue
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleChange: function handleChange(event) {
      return dispatch((0, _handleSearchInput2.default)(event));
    }
  };
};

var SearchFieldContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_SearchField2.default);

exports.default = SearchFieldContainer;