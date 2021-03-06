const { getUsers, saveUser, updateUser, deleteUser } = require("../../controllers/EmployeeController")
const express = require("express");
const router = express.Router();



//@routes GET api/posts
//@desc GET All post
//fetch from database
router.get("/", getUsers)


//@routes POST api/posts
//@desc Create a post
//insert a person
router.post("/save", saveUser)



//@routes update api/posts/:id
//@desc update a user
router.post("/update/:_id", updateUser)


//@routes Delete api/posts/:id
//@desc delete a user
router.delete("/delete/:userId", deleteUser);


module.exports = router;