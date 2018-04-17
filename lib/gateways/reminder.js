'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addReminder = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addReminder = exports.addReminder = function addReminder(reminder) {
  return _axios2.default.post('/api/add_reminder', reminder).then(function (response) {
    return response.status === 200;
  }).catch(function () {
    return false;
  });
};