const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const generateToken = require('../utils/generateToken');

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRE = process.env.JWT_EXPIRE;

const UserSchema = new Schema({
	username: {
		type: String,
		required: [true, 'Please provide a username'],
	},
	email: {
		type: String,
		required: [true, 'Please provide a email address'],
		unique: true,
		match: [
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			'Please provide a valid email address',
		],
	},
	password: {
		type: String,
		required: [true, 'Please provide a password'],
		minLength: 8,
		select: false,
	},
	resetPasswordToken: {
		type: String,
	},
	resetPasswordExpire: {
		type: Date,
	},
});

UserSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

UserSchema.methods.matchPasswords = async function (password) {
	return await bcrypt.compare(password, this.password);
};

UserSchema.methods.getSignedToken = function () {
	return generateToken(this._id);
};

UserSchema.methods.getResetPasswordToken = function () {
	const resetToken = crypto.randomBytes(20).toString('hex');

	this.resetPasswordToken = crypto
		.createHash('sha256')
		.update(resetToken)
		.digest('hex');

	this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);

	return resetToken;
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
