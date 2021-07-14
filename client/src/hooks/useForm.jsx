import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, register } from '../store/actions/auth';
import { validateForm } from '../utils/validateForm';

export const useForm = (values) => {
	const [inputValues, setInputValues] = useState(values);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errors, setErrors] = useState('');

	const dispatch = useDispatch();

	const handleRegister = (e) => {
		e.preventDefault();
		setErrors(validateForm(inputValues));

		if (Object.keys(errors).length === 0) {
			setIsSubmitted(true);
			inputValues &&
				dispatch(
					register({
						username: inputValues.username,
						email: inputValues.email,
						password: inputValues.password,
					}),
				);
		} else {
			console.log(errors);
		}
	};

	const handleLogin = (e) => {
		e.preventDefault();
		setErrors(validateForm(inputValues));

		if (Object.keys(errors).length === 0) {
			setIsSubmitted(true);
			dispatch(
				login({ email: inputValues.email, password: inputValues.password }),
			);
		} else {
			console.log(errors);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		e.persist();
		setInputValues({ ...inputValues, [name]: value });
	};

	return {
		handleRegister,
		handleLogin,
		handleChange,
		inputValues,
		errors,
		isSubmitted,
	};
};
