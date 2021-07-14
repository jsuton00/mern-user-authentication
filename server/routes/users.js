const express = require('express');
const { getPrivateData, getUsers, getUser } = require('../controllers/users');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.route('/').get(getUsers);
router.route('/user').get(protect, getUser);

module.exports = router;
