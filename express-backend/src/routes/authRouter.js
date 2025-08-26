const express = require("express");
const router = express.Router();
const UserController = require("../controllers/authController");

router.get("/", UserController.getAll)

module.exports = router;