const { StatusCodes } = require('http-status-codes');
const gamesModel = require('../../model/games');
const gamesValidations = require('../../validations/games');
const ErrorCreator = require('../../helpers/errorCreator');

const updateGameById = async (id, newValue) => {
  const validationResult = gamesValidations.updateGame(newValue);

  if ('error' in validationResult) {
    const error = new ErrorCreator(validationResult.error.message, StatusCodes);
    return error;
  }

  const updatedGame = await gamesModel.updateGameById(id, newValue);

  return updatedGame;
};

module.exports = updateGameById;
