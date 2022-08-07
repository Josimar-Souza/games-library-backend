const express = require('express');
const addGame = require('./addGame');

const gamesRouter = express.Router({ mergeParams: true });

gamesRouter.post('/', addGame);

module.exports = (rootRouter) => {
  rootRouter.use('/games', gamesRouter);
}