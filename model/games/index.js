const addGame = require('./addGame');
const getUserGames = require('./getUserGames');

const gamesModel = {
  addGame,
  getUserGames,
};

module.exports = gamesModel;