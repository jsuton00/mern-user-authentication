import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './pages/LoginPage';
import ProtectedPage from './pages/ProtectedPage';
import SignUpPage from './pages/SignUpPage';
import { loadUser } from './store/actions/auth';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadUser());
	}, [dispatch]);

	return (
		<div id="app" className="app">
			<Switch>
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/register" component={SignUpPage} />
				<PrivateRoute exact path="/protected" component={ProtectedPage} />
			</Switch>
			<Redirect from="/" to="/login" />
		</div>
	);
};

export default App;
