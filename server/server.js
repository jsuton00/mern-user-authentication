require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const app = express();
const auth = require('./routes/auth');
const users = require('./routes/users');

connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/auth', auth);
app.use('/api/users', users);

// Error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
