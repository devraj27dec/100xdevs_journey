const express = require("express");
const {
  SignInController,
  SignUpController,
  LogoutController,
  profileController,
} = require("../controllers/user.controllers");
const { isAuthenticated } = require("../middlewares/auth.middleaware");
const {BalanceChecker, TransferController} = require('../controllers/account.controllers')
const router = express.Router();

// authentication
router.route("/signup").post(SignUpController);
router.route("/signin").post(SignInController);
router.route("/profile").get(isAuthenticated, profileController);
router.route("/logout").get(isAuthenticated, LogoutController);

// account handler
router.route("/balance").get(isAuthenticated, BalanceChecker);
router.route('/transfer').post(isAuthenticated, TransferController)



module.exports = router;
