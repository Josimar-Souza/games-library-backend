const { StatusCodes } = require('http-status-codes');
const ErrorCreator = require('../../helpers/errorCreator');
const gamesModel = require('../../model/games');
const gamesValidations = require('../../validations/games');

const addGame = async (newGame, user) => {
  const validationResult = gamesValidations.addGame(newGame);

  if ('error' in validationResult) {
    const error = new ErrorCreator(validationResult.error.message, StatusCodes.BAD_REQUEST);
    return error;
  }

  const gameToAdd = {
    ...newGame,
    user: user.email,
  };

  const gameAdded = await gamesModel.addGame(gameToAdd);

  return gameAdded;
}

module.exports = addGame;
