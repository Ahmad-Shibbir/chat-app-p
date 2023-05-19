// external import
const express = require("express");

// internal import
const {getUsers}=require("../controller/usersController")

const router = express.Router();

// login apage
router.get("/",getUsers);

module.exports = router