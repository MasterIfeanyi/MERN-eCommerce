const { addToCart } = require("../../controllers/customerController")
const express = require("express");
const router = express.Router();


//@routes POST api/posts
//@desc Create a post
//insert a person
router.post("/save", addToCart)



module.exports = router;