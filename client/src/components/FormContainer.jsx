import React from 'react';
import FormSwitch from './FormSwitch';

const FormContainer = (props) => {
	const { children } = props;
	return (
		<div className="form-container container">
			{children}
			<FormSwitch />
		</div>
	);
};

export default FormContainer;
