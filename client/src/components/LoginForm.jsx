import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { login } from '../store/actions/auth';
import { validateLoginForm } from '../utils/validateForm';

const LoginForm = () => {
	const [inputValues, setInputValues] = useState({
		email: '',
		password: '',
	});

	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errors, setErrors] = useState('');

	const auth = useSelector((state) => state.auth.isAuthenticated);
	const dispatch = useDispatch();
	let history = useHistory();

	const handleChange = (e) => {
		const { name, value } = e.target;
		e.persist();
		setInputValues({ ...inputValues, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validateLoginForm(inputValues));

		if (Object.keys(errors).length === 0) {
			setIsSubmitted(true);
			inputValues &&
				dispatch(
					login({
						email: inputValues.email,
						password: inputValues.password,
					}),
				);
			auth === true && history.push({ pathname: '/protected' });
		} else {
			console.log(errors);
		}
	};

	return (
		<form
			id="loginForm"
			name="loginForm"
			onSubmit={handleSubmit}
			className="form login-form"
		>
			<h5 className="form-title row">Login</h5>
			<div className="form-body">
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
						autoComplete="password"
						onChange={handleChange}
						values={inputValues.password}
					/>
					<p className="forgot-password-row row">
						{isSubmitted && errors.password ? (
							<span className="invalid-feedback">{errors.password}</span>
						) : (
							<></>
						)}
						<span className="forgot-password-link">Forgot Password</span>
					</p>
				</div>
				<div className="form-controls form-submit-row">
					<button id="btnLogin" className="btn btn-submit">
						Login
					</button>
				</div>
			</div>
		</form>
	);
};

export default LoginForm;
