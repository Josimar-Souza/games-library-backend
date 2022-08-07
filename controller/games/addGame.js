const { StatusCodes } = require('http-status-codes');
const ErrorCreator = require('../../helpers/errorCreator');
const gamesService = require('../../service/games');

const addGame = async (req, res, next) => {
  try {
    const gameAdded = await gamesService.addGame(req.body, req.user);

    if (gameAdded instanceof ErrorCreator) {
      return res.status(gameAdded.status).send({ message: gameAdded.message });
    }

    if (!gameAdded) {
      throw new Error();
    }

    return res.status(StatusCodes.CREATED).send({ newGame: gameAdded });
  } catch (error) {
    next(error);
  }
};

module.exports = addGame;
