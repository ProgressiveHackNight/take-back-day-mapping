'use strict';

var _locations = require('../locations');

describe('toLocations', function () {
  it('transforms api data', function () {
    var apiLocations = [{
      "type": "Pharmacy",
      "latitude": "40.78251",
      "name": "Duane Reade",
      "longitude": "-73.95735",
      "notes": "",
      "hours": "",
      "address": "1231 Madison Ave, New York, 10128, NY"
    }, {
      "type": "Police",
      "latitude": "43.106134",
      "name": "Niagara Falls Police Department",
      "longitude": "-79.052552",
      "notes": "",
      "hours": "",
      "address": "1925 Main St, Niagara Falls, 14305, NY"
    }];
    var expectedLocations = [{
      id: 0,
      "type": "Pharmacy",
      "lat": "40.78251",
      "name": "Duane Reade",
      "lon": "-73.95735",
      "location": "1231 Madison Ave, New York, 10128, NY"
    }, {
      id: 1,
      "type": "Police",
      "lat": "43.106134",
      "name": "Niagara Falls Police Department",
      "lon": "-79.052552",
      "location": "1925 Main St, Niagara Falls, 14305, NY"
    }];
    expect((0, _locations.toLocations)(apiLocations)).toEqual(expectedLocations);
  });
});