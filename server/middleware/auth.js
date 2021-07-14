const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

const protect = async (req, res, next) => {
	let token;

	if (
		req.header.authorization &&
		req.header.authorization.startsWith('Bearer')
	) {
		token = req.header.authorization.split(' ')[1];
	}

	if (!token) {
		return next(
			new ErrorResponse('Not authorized to access this endpoint', 401),
		);
	}

	try {
		const decoded = jwt.verify(token, JWT_SECRET);
		const user = await User.findById(decoded.id);

		console.log(user);

		if (!user) {
			return next(new ErrorResponse('No user found with this id', 404));
		}

		req.user = user;

		next();
	} catch (err) {
		return next(new ErrorResponse('Not authorized to access this route', 401));
	}
};

exports.protect = protect;
