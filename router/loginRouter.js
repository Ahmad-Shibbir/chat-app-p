// external import
const express = require("express");

// internal import
const {getLogin}=require("../controller/loginController")

const router = express.Router();

// login apage
router.get("/",getLogin);

module.exports = router
