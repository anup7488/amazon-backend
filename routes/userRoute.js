const express = require('express')

const userController = require('../controllers/userController.js')
const userRouter = express.Router();


userRouter.route('/')
.get(userController.getUsers)
.post(userController.addUser)

userRouter.route('/:id')
.put(userController.replaceUser)
.delete(userController.deleteUser);


module.exports = userRouter;