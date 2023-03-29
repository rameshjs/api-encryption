const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");

router.get("/users", usersController.getAllUsers);
router.get("/users/:id", usersController.getUserById);

module.exports = router;
