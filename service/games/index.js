const addGame = require('./addGame');
const getUserGames = require('./getUserGames');
const deleteGameById = require('./deleteGameById');

const gamesService = {
  addGame,
  getUserGames,
  deleteGameById,
};

module.exports = gamesService;
