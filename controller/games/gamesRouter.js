const express = require('express');
const addGame = require('./addGame');
const getUserGames = require('./getUserGames');
const deleteGameById = require('./deleteGameById');
const updateGameById = require('./updateGameById');
const findGameById = require('./findGameById');
const Auth = require('../../middlewares/Auth');

const gamesRouter = express.Router({ mergeParams: true });

gamesRouter.post('/', Auth, addGame);
gamesRouter.patch('/:id', Auth, updateGameById);
gamesRouter.get('/', Auth, getUserGames);
gamesRouter.get('/:id', Auth, findGameById);
gamesRouter.delete('/:id', Auth, deleteGameById);

module.exports = (rootRouter) => {
  rootRouter.use('/games', gamesRouter);
}