const express = require('express')
const {SignInController , SignUpController, LogoutController, profileController} = require('../controllers/user.controllers')
const { isAuthenticated } = require('../middlewares/auth.middleaware')
const router = express.Router()


router.route('/signup').post(SignUpController)
router.route('/signin').post(SignInController)
router.route('/profile').get(isAuthenticated, profileController);
router.route('/logout').get(isAuthenticated, LogoutController)
module.exports = router