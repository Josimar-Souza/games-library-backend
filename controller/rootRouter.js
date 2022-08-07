const express = require('express');
const userRouter = require('./users/userRouter');
const gamesRouter = require('./games/gamesRouter');

const rootRouter = express.Router({ mergeParams: true });

userRouter(rootRouter);
gamesRouter(rootRouter);

module.exports = (app) => {
  app.use('/', rootRouter);
};
