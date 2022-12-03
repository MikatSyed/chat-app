// external imports
const express = require("express");

// internal imports
const { getUsers } = require("../controller/usersController.js");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse.js");

const router = express.Router();

// login page
router.get("/", decorateHtmlResponse("Users"), getUsers);

module.exports = router;