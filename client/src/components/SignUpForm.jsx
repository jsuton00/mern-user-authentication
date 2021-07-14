import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../store/actions/auth';
import { validateRegisterForm } from '../utils/validateForm';

const SignUpForm = () => {
	const [inputValues, setInputValues] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errors, setErrors] = useState('');

	const dispatch = useDispatch();

	const handleChange = (e) => {
		const { name, value } = e.target;
		e.persist();
		setInputValues({ ...inputValues, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validateRegisterForm(inputValues));

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

	return (
		<form
			id="signUpForm"
			name="signUpForm"
			onSubmit={handleSubmit}
			className="form signup-form"
		>
			<h5 className="form-title row">Sign Up</h5>
			<div className="form-body">
				<div className="form-controls form-input-row">
					<label htmlFor="username" className="form-label">
						Username
					</label>
					<input
						id="username"
						name="username"
						type="text"
						className={`form-input ${
							isSubmitted && errors.username ? 'has-error' : ''
						}`}
						placeholder="Enter your username"
						autoComplete="username"
						onChange={handleChange}
						values={inputValues.username}
					/>
					{isSubmitted && errors.username ? (
						<p className="invalid-feedback">{errors.username}</p>
					) : (
						<></>
					)}
				</div>
				<div className="form-controls form-input-row">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input
						id="email"
						name="email"
						type="text"
						className={`form-input ${
							isSubmitted && errors.email ? 'has-error' : ''
						}`}
						placeholder="Enter your email address"
						autoComplete="email"
						onChange={handleChange}
						values={inputValues.email}
					/>
					{isSubmitted && errors.email ? (
						<p className="invalid-feedback">{errors.email}</p>
					) : (
						<></>
					)}
				</div>
				<div className="form-controls form-input-row">
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input
						id="password"
						name="password"
						type="password"
						className={`form-input ${
							isSubmitted && errors.password ? 'has-error' : ''
						}`}
						placeholder="Enter your password"
						autoComplete="new-password"
						onChange={handleChange}
						values={inputValues.password}
					/>
					{isSubmitted && errors.password ? (
						<p className="invalid-feedback">{errors.password}</p>
					) : (
						<></>
					)}
				</div>
				<div className="form-controls form-input-row">
					<label htmlFor="confirmPassword" className="form-label">
						Confirm Password
					</label>
					<input
						id="confirmPassword"
						name="confirmPassword"
						type="password"
						className={`form-input ${
							isSubmitted && errors.confirmPassword ? 'has-error' : ''
						}`}
						placeholder="Confirm your password"
						autoComplete="repeated-password"
						onChange={handleChange}
						values={inputValues.confirmPassword}
					/>
					{isSubmitted && errors.confirmPassword ? (
						<p className="invalid-feedback">{errors.confirmPassword}</p>
					) : (
						<></>
					)}
				</div>
				<div className="form-controls form-submit-row">
					<button id="btnRegister" className="btn btn-submit">
						Sign up
					</button>
				</div>
			</div>
		</form>
	);
};

export default SignUpForm;
