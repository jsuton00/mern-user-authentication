import { combineReducers } from 'redux';
import auth from './authReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
	auth,
	error,
});

export default rootReducer;
