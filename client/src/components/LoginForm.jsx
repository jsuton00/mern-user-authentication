import React from 'react';

const LoginForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
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
						type="email"
						className="form-input"
						placeholder="Enter your email address"
					/>
				</div>
				<div className="form-controls form-input-row">
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input
						id="password"
						name="password"
						type="password"
						className="form-input"
						placeholder="Enter your password"
					/>
					<span className="forgot-password-link">Forgot Password</span>
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
