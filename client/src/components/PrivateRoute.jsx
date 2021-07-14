import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const auth = useSelector((state) => state.auth.isAuthenticated);
	return (
		<Route
			{...rest}
			render={({ location, ...props }) =>
				auth === true ? (
					<Component {...props} />
				) : (
					<Redirect from={location} to={{ pathname: '/login' }} />
				)
			}
		/>
	);
};

export default PrivateRoute;
