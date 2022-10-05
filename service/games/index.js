const addGame = require('./addGame');
const getUserGames = require('./getUserGames');
const deleteGameById = require('./deleteGameById');
const updateGameById = require('./updateGameById');
const findGameById = require('./findGameById');

const gamesService = {
  addGame,
  getUserGames,
  deleteGameById,
  updateGameById,
  findGameById,
};

module.exports = gamesService;
