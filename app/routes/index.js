const router = require('express').Router();
const dotenv = require('dotenv');
dotenv.config();




router.use('/', require('./homeRoute'));
router.use('/auth', require('./auth.route'));

module.exports = router;