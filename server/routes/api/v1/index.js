const express = require('express');
const router = express.Router();
require('dotenv').config();
require('mongoose');
const fields = require('./field/index');

router.use('/dynamicform', fields);

module.exports = router;