import React from 'react';
import FormContainer from '../components/FormContainer';
import SignUpForm from '../components/SignUpForm';

const SignUpPage = () => {
	return (
		<div className="sign-up-page container-fluid">
			<div className="page-content container">
				<FormContainer>
					<SignUpForm />
				</FormContainer>
			</div>
		</div>
	);
};

export default SignUpPage;
