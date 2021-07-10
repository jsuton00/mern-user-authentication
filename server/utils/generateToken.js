const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRE = process.env.JWT_EXPIRE;

const generateToken = (id) => {
	return jwt.sign({ id }, JWT_SECRET, { expiresIn: JWT_EXPIRE });
};

module.exports = generateToken;
