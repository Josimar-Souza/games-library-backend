const express = require('express');
const userRouter = require('./users/userRouter');

const rootRouter = express.Router({ mergeParams: true });

userRouter(rootRouter);

module.exports = (app) => {
  app.use('/', rootRouter);
};
