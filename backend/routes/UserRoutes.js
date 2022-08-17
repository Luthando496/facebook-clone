const express = require("express");
const {
  registerUser,
  getAllUsers,
  Login,
  protect,
  isAdmin,
} = require("../Controllers/UsersController.js");
const router = express.Router();

router.route("/users").get(protect, isAdmin, getAllUsers);
router.route("/users/auth").post(registerUser);
router.route("/users/login").post(Login);

module.exports = router;
