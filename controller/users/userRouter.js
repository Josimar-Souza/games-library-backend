const express = require('express');

const userRouter = express.Router({ mergeParams: true });

module.exports = (rootRouter) => {
  rootRouter.use('/user', userRouter);
};
