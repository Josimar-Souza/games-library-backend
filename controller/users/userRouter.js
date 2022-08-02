const express = require('express');
const registerUser = require('./register');

const userRouter = express.Router({ mergeParams: true });

userRouter.post('/', registerUser);

module.exports = (rootRouter) => {
  rootRouter.use('/user', userRouter);
};
