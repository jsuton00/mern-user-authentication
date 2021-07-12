import React from 'react';
import FormContainer from '../components/FormContainer';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
	return (
		<div className="login-page container-fluid">
			<div className="page-content container">
				<FormContainer>
					<LoginForm />
				</FormContainer>
			</div>
		</div>
	);
};

export default LoginPage;
