const express = require('express');
const registerUser = require('./register');
const login = require('./login');

const userRouter = express.Router({ mergeParams: true });

userRouter.post('/register', registerUser);
userRouter.post('/login', login);

module.exports = (rootRouter) => {
  rootRouter.use('/user', userRouter);
};
