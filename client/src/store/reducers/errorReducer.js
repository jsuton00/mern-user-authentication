import { GET_ERRORS, CLEAR_ERRORS } from '../actions/actionTypes';
import { updateObjects } from '../helpers/reduxUtils';

const initialState = {
	message: {},
	status: null,
	id: null,
};

const getErrors = (state, action) => {
	return updateObjects(state, {
		message: action.message,
		status: action.status,
		id: action.id,
	});
};

const clearErrors = (state, action) => {
	return updateObjects(state, {
		msg: {},
		status: null,
		id: null,
	});
};

const error = (state = initialState, action) => {
	switch (action.type) {
		case GET_ERRORS:
			return getErrors(state, action);
		case CLEAR_ERRORS:
			return clearErrors(state, action);
		default:
			return state;
	}
};

export default error;
