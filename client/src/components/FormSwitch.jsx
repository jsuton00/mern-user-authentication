import React from 'react';
import { useHistory, useLocation } from 'react-router';

const FormSwitch = () => {
	let history = useHistory();
	let location = useLocation();

	const handleRedirect = () => {
		if (location.pathname === '/register') {
			return history.push('/login');
		} else if (location.pathname === '/login') {
			return history.push('/register');
		}
	};

	return (
		<div className="form-switch-row row">
			<p className="form-switch new-member" onClick={handleRedirect}>
				{location.pathname === '/register'
					? 'Already have an account? Log in!'
					: "Don't have an account? Sign up!"}
			</p>
		</div>
	);
};

export default FormSwitch;
