const gamesModel = require('../../model/games');
const ErrorCreator = require('../../helpers/errorCreator');
const { StatusCodes } = require('http-status-codes');

const findGameById = async (id, userEmail) => {
  const game = await gamesModel.findGameById(id);

  if (!game) {
    const error = new ErrorCreator('Game not found!', StatusCodes.NOT_FOUND);
    return error;
  }

  if (game.user !== userEmail) {
    const error = new ErrorCreator('You can only list games that you registered!', StatusCodes.UNAUTHORIZED);
    return error;
  }

  return game;
}

module.exports = findGameById;
