const express = require('express');
const addGame = require('./addGame');
const getUserGames = require('./getUserGames');
const Auth = require('../../middlewares/Auth');

const gamesRouter = express.Router({ mergeParams: true });

gamesRouter.post('/', Auth, addGame);
gamesRouter.get('/', Auth, getUserGames);

module.exports = (rootRouter) => {
  rootRouter.use('/games', gamesRouter);
}