const express = require('express');
const addGame = require('./addGame');
const getUserGames = require('./getUserGames');
const deleteGameById = require('./deleteGameById');
const updateGameById = require('./updateGameById');
const Auth = require('../../middlewares/Auth');
const { updateGame } = require('../../validations/games');

const gamesRouter = express.Router({ mergeParams: true });

gamesRouter.post('/', Auth, addGame);
gamesRouter.post('/:id', Auth, updateGame);
gamesRouter.get('/', Auth, getUserGames);
gamesRouter.delete('/:id', Auth, deleteGameById);

module.exports = (rootRouter) => {
  rootRouter.use('/games', gamesRouter);
}