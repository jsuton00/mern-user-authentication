import {
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
} from '../actions/actionTypes';
import { updateObjects } from '../helpers/reduxUtils';

const initialState = {
	token: localStorage.getItem('token') || '',
	isAuthenticated: null,
	isLoading: false,
	user: null,
};

const userLoading = (state, action) => {
	return updateObjects(state, {
		isLoading: true,
	});
};

const userLoaded = (state, action) => {
	return updateObjects(state, {
		isAuthenticated: true,
		isLoading: false,
		user: action.responseData,
	});
};

const authSuccess = (state, action) => {
	localStorage.setItem('token', action.registeredUser.token);
	return updateObjects(state, {
		isAuthenticated: true,
		isLoading: false,
		user: action.registeredUser,
		token: action.registeredUser.token,
	});
};

const authFail = (state, action) => {
	localStorage.removeItem('token');
	return updateObjects(state, {
		token: null,
		user: null,
		isAuthenticated: false,
		isLoading: false,
	});
};

const auth = (state = initialState, action) => {
	switch (action.type) {
		case USER_LOADING:
			return userLoading(state, action);
		case USER_LOADED:
			return userLoaded(state, action);
		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
			return authSuccess(state, action);
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOGOUT_SUCCESS:
		case REGISTER_FAIL:
			return authFail(state, action);

		default:
			return state;
	}
};

export default auth;
