const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController");

router.post("/signup", AuthController.createUser)
router.post("/send-email", AuthController.sendOtp)
router.post("/check-email", AuthController.checkEmail)
router.post("/signin", AuthController.login)
router.get("/user", AuthController.getUserByEmail)

module.exports = router;