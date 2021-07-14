export const validateRegisterForm = (values) => {
	let errors = {};

	if (!values.username || !values.username.length === 0) {
		errors.username = 'No username! Please enter your username';
	}

	if (!values.email) {
		errors.email =
			'No email address is provided. Please enter your email address';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email =
			'Email address is invalid! Please enter a valid email address.';
	}

	if (!values.password) {
		errors.password = 'Password is required';
	} else if (
		!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$/.test(
			values.password,
		)
	) {
		errors.password =
			'The password must be eight characters or longer. It must contains at least 1 lowercase, 1 uppercase letters, 1 numeric character and 1 special character.';
	}

	if (!values.confirmPassword) {
		errors.confirmPassword = 'Password is required';
	} else if (values.confirmPassword !== values.password) {
		errors.confirmPassword = 'Passwords do not match';
	}

	return errors;
};

export const validateLoginForm = (values) => {
	let errors = {};

	if (!values.email) {
		errors.email =
			'No email address is provided. Please enter your email address';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email =
			'Email address is invalid! Please enter a valid email address.';
	}

	if (!values.password) {
		errors.password = 'Password is required';
	} else if (
		!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$/.test(
			values.password,
		)
	) {
		errors.password =
			'The password must be eight characters or longer. It must contains at least 1 lowercase, 1 uppercase letters, 1 numeric character and 1 special character.';
	}

	return errors;
};
