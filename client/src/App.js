import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

const App = () => {
	return (
		<div id="app" className="app">
			<Switch>
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/register" component={SignUpPage} />
			</Switch>
			<Redirect from="/" to="/login" />
		</div>
	);
};

export default App;
