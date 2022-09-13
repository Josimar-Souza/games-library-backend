const addGame = require('./addGame');
const getUserGames = require('./getUserGames');
const deleteGameById = require('./deleteGameById');
const findGameById = require('./findGameById');
const updateGameById = require('./updateGameById');

const gamesModel = {
  addGame,
  getUserGames,
  deleteGameById,
  findGameById,
  updateGameById,
};

module.exports = gamesModel;
