const { registerValidation } = require("../../controllers/validation")
const { addToCart } = require("../../controllers/customerController")
const express = require("express");
const router = express.Router();
const cors = require("cors");

//employeeModel model
const Employee = require("../../models/User");



//@routes POST api/posts
//@desc Create a post
//insert a person
router.post("/save", addToCart)



module.exports = router;