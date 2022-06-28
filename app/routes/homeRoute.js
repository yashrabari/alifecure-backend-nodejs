const { HomeController } = require('../controllers');

const router = require('express').Router();


router.get('/', HomeController.getHomeRequest)


module.exports = router;