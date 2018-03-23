"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var initialState = {
    all: [{ id: 1, key: "1", price: 10, defaultAnimation: 2, label: "skate-board", position: { lat: 40.7224017, lng: -73.9896719 } }, { id: 2, key: "2", price: 20, defaultAnimation: 2, label: "BEER", position: { lat: 40.7024017, lng: -73.9896719 } }, { id: 3, key: "3", price: 90, defaultAnimation: 2, label: "Cider", position: { lat: 40.7124017, lng: -73.9796719 } }]
};

module.exports = function (_x, action) {
    var state = arguments[0] === undefined ? initialState : arguments[0];
    var updated = Object.assign({}, state);

    switch (action.type) {
        case constants.ITEM_ADDED:
            console.log("ITEM ADDED: " + JSON.stringify(action.data));

            var all = Object.assign([], updated.all);
            all.push(action.data);
            updated.all = all;

            return updated;


        default:
            return updated;

    }
};