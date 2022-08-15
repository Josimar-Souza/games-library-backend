const addGame = require('./addGame');
const getUserGames = require('./getUserGames');
const deleteGameById = require('./deleteGameById');
const findGameById = require('./findGameById');

const gamesModel = {
  addGame,
  getUserGames,
  deleteGameById,
  findGameById,
};

module.exports = gamesModel;
