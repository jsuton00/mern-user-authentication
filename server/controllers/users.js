const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

const getPrivateData = (req, res, next) => {
	res.status(200).json({
		success: true,
		data: 'Access Allowed',
	});
};

const getUsers = async (req, res, next) => {
	try {
		const users = await User.find();
		if (!users) {
			return next(new ErrorResponse('No users exist', 404));
		}

		res.status(200).json({
			success: true,
			data: users,
		});
	} catch (err) {
		return next(new ErrorResponse(err.message, 500));
	}
};

const getUser = async (req, res, next) => {
	try {
		const user = await User.findById(req.user.id).select('-password');

		if (!user) {
			return next(new ErrorResponse('No user exists', 404));
		}

		res.status(200).json({
			status: true,
			data: user,
		});
	} catch (err) {
		next(new ErrorResponse(err.message, 500));
	}
};

exports.getPrivateData = getPrivateData;
exports.getUser = getUser;
exports.getUsers = getUsers;
