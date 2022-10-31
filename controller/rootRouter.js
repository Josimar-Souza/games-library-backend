const express = require('express');
const userRouter = require('./users/userRouter');
const gamesRouter = require('./games/gamesRouter');
const categoriesRouter = require('./categories/categoriesRouter');
const { StatusCodes } = require('http-status-codes');

const rootRouter = express.Router({ mergeParams: true });

rootRouter.get('/', (_req, res, next) => {
  try {
    return res.status(StatusCodes.OK).json({ message: 'Server is online' });
  } catch (error) {
    next(error);
  }
})

userRouter(rootRouter);
gamesRouter(rootRouter);
categoriesRouter(rootRouter);

module.exports = (app) => {
  app.use('/', rootRouter);
};
