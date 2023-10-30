const express = require('express');
const UsersController = require('../controllers/UserController')
const router = express.Router();

router.get("/", UsersController.findUsers);
router.post("/users", UsersController.createUser);
router.get("/users/:id", UsersController.findUser);
router.put("/users/:id", UsersController.update);
router.delete("/users/:id", UsersController.deleteUser);

module.exports = router
