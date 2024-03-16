const userController = require('../controllers/user');

const userRouter = require('express').Router();

userRouter.post('/addUser', userController.addUser);
userRouter.get('/getUsers', userController.getAllUsers);
userRouter.get('/:id', userController.getOneUser);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter;
