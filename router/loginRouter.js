//external imports
const express = require('express');

const router = express.Router();

// internal imports
const { getLogin } = require("../controller/loginController.js");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse.js");

//login page
router.get("/",decorateHtmlResponse("Login"),getLogin)

module.exports = router;