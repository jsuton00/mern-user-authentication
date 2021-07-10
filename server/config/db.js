const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_DB_URI = process.env.MONGO_DB_URI;

const connectDB = async () => {
	await mongoose.connect(MONGO_DB_URI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: true,
		useUnifiedTopology: true,
	});

	console.log('MongoDB connected');
};

module.exports = connectDB;
