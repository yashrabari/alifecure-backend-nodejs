const router = require('express').Router();



const AuthController = require('../controllers/Auth.Controller');



router.post('/login', AuthController.login)
router.post('/signup', AuthController.register)


module.exports = router;