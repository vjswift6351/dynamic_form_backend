const express = require('express');
const router = express.Router();
require('dotenv').config();
require('mongoose');
const fields = require('./field/index');
const forms = require('./forms/index');
const user = require('./user/index');

router.use('/dynamicform', fields);
router.use('/dynamicform', forms);
router.use('/dynamicform', user);

module.exports = router;