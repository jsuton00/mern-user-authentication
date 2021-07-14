import axios from 'axios';
import { tokenConfig } from '../helpers/reduxUtils';
import * as actionTypes from './actionTypes';
import { returnErrors } from './error';

export const loadUser = () => (dispatch, getState) => {
	// User loading
	dispatch({ type: actionTypes.USER_LOADING });

	axios
		.get('/api/users/user', tokenConfig(getState))
		.then((res) =>
			dispatch({
				type: actionTypes.USER_LOADED,
				responseData: res.data,
			}),
		)
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: actionTypes.AUTH_ERROR,
			});
		});
};

export const login =
	({ email, password }) =>
	(dispatch) => {
		const body = JSON.stringify({ email, password });

		axios
			.post('/api/auth/login', body, tokenConfig())
			.then((res) =>
				dispatch({
					type: actionTypes.LOGIN_SUCCESS,
					registeredUser: res.data,
				}),
			)
			.catch((err) => {
				dispatch(
					returnErrors(
						err.response.data,
						err.response.status,
						actionTypes.LOGIN_FAIL,
					),
				);
				dispatch({
					type: actionTypes.LOGIN_FAIL,
				});
			});
	};

export const register =
	({ username, email, password }) =>
	(dispatch) => {
		const body = JSON.stringify({ username, email, password });

		axios
			.post('/api/auth/register', body, tokenConfig())
			.then((response) =>
				dispatch({
					type: actionTypes.REGISTER_SUCCESS,
					registeredUser: response.data,
				}),
			)
			.catch((err) => {
				dispatch(
					returnErrors(
						err.response.data,
						err.response.status,
						actionTypes.REGISTER_FAIL,
					),
				);
				dispatch({
					type: actionTypes.REGISTER_FAIL,
				});
			});
	};
