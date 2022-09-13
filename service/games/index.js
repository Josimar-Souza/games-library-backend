const addGame = require('./addGame');
const getUserGames = require('./getUserGames');
const deleteGameById = require('./deleteGameById');
const updateGameById = require('./updateGameById');

const gamesService = {
  addGame,
  getUserGames,
  deleteGameById,
  updateGameById,
};

module.exports = gamesService;
