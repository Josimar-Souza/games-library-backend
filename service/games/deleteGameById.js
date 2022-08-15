const { StatusCodes } = require('http-status-codes');
const gamesModels = require('../../model/games');
const ErrorCreator = require('../../helpers/errorCreator');

const deleteGameById = async (id, user) => {
  const game = await gamesModels.findGameById(id);

  if (!game) {
    const error = new ErrorCreator('Game not found!', StatusCodes.NOT_FOUND);
    return error;
  }

  if (game.user !== user.email) {
    const error = new ErrorCreator('You can only delete games that you posted!', StatusCodes.UNAUTHORIZED);
    return error;
  }

  const deletedGame = await gamesModels.deleteGameById(id);

  if (deletedGame.acknowledged === true) {
    return 'Game successfully deleted!';
  }
};

module.exports = deleteGameById;
