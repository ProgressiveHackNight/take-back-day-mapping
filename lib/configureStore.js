'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _rootReducer = require('./reducers/rootReducer');

var _rootReducer2 = _interopRequireDefault(_rootReducer);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _toGlobalState = require('./transformers/toGlobalState');

var _toGlobalState2 = _interopRequireDefault(_toGlobalState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return (0, _redux.createStore)(_rootReducer2.default, (0, _toGlobalState2.default)(initialState), (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
    return f;
  }));
}