"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var _utils = require("../utils");

var TurboClient = _utils.TurboClient;
var HTTPAsync = _utils.HTTPAsync;
module.exports = {

	addItem: function (item) {
		return {
			type: constants.ITEM_ADDED,
			data: item
		};
	},

	locationChanged: function (location) {
		return {
			type: constants.LOCATION_CHANGED,
			data: location
		};
	},

	currentUser: function () {
		return function (dispatch) {
			return dispatch(HTTPAsync.get("user", params, constants.USERS_RECEIVED));
		};
	}

	// fetchUsers: (params) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.getRequest('user', params, constants.USERS_RECEIVED))
	// 	}
	// },
	//
	// addUser: (params) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.postRequest('user', params, constants.USER_CREATED))
	// 	}
	// },
	//
	// // Unlike addUser, register() also maintains a session for login state. After calling
	// // TurboClient.createUser(), the new user is logged in as well:
	// register: (params) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.createUser(params, constants.USER_CREATED))
	// 	}
	// },
	//
	// loginUser: (credentials) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.login(credentials, constants.CURRENT_USER_RECEIVED))
	// 	}
	// },
	//
	// currentUser: () => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.currentUser(constants.CURRENT_USER_RECEIVED))
	// 	}
	// }

};