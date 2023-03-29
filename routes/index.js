const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");

router.get("/users", usersController.getAllUsers);

module.exports = router;
