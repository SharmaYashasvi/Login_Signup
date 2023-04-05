// importing express
const express = require("express");
//importing function
const { registerUser, loginUser, getUserDetails,logout } = require("../controllers/userController");
// to authenticate user exixts or not
const { isAuthenticatedUser} = require("../middleware/auth");

const router = express.Router();

// importing user route
// register route
router.route("/register").post(registerUser);
// login route
router.route("/login").post(loginUser);
// user profile route to prevent carsh of page on refresh of site
router.route("/me").get(isAuthenticatedUser, getUserDetails);
// logout user route
router.route("/logout").get(logout);


module.exports = router;
