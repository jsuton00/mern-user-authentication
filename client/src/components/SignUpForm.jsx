import React from 'react';

const SignUpForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<form
			id="loginForm"
			name="loginForm"
			onSubmit={handleSubmit}
			className="form signup-form"
		>
			<h5 className="form-title row">Login</h5>
			<div className="form-body">
				<div className="form-controls form-input-row">
					<label htmlFor="username" className="form-label">
						Username
					</label>
					<input
						id="username"
						name="username"
						type="text"
						className="form-input"
						placeholder="Enter your username"
					/>
				</div>
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
						autoComplete="email"
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
						autoComplete="new-password"
					/>
				</div>
				<div className="form-controls form-input-row">
					<label htmlFor="confirmPassword" className="form-label">
						Confirm Password
					</label>
					<input
						id="confirmPassword"
						name="confirmPassword"
						type="password"
						className="form-input"
						placeholder="Confirm your password"
						autoComplete="repeated-password"
					/>
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
