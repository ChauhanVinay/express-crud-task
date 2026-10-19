const express = require('express');
const router = express.Router();

//controller
const userController = require("../controllers/userController");
//GET /users
router.get("/", userController.getAllUsers);
//POST /users
router.post("/", userController.addUser);
//GET /:id
router.get("/:id", userController.getUserById);

module.exports = router;