const addGame = require('./addGame');
const getUserGames = require('./getUserGames');

const gamesService = {
  addGame,
  getUserGames,
};

module.exports = gamesService;
