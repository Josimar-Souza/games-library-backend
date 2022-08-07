const express = require('express');
const addGame = require('./addGame');
const Auth = require('../../middlewares/Auth');

const gamesRouter = express.Router({ mergeParams: true });

gamesRouter.post('/', Auth, addGame);

module.exports = (rootRouter) => {
  rootRouter.use('/games', gamesRouter);
}