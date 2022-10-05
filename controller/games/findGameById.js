const { StatusCodes } = require('http-status-codes');
const ErrorCreator = require('../../helpers/errorCreator');
const gamesService = require('../../service/games');

const findGameById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { email } = req.user;
    const game = await gamesService.findGameById(id, email);

    if (game instanceof ErrorCreator) {
      return res.status(game.status).json({ message: game.message });
    }

    return res.status(StatusCodes.OK).json({ game });
  } catch (error) {
    next(error);
  }
}

module.exports = findGameById;
