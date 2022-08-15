const { StatusCodes } = require('http-status-codes');
const ErrorCreator = require('../../helpers/errorCreator');
const gamesServices = require('../../service/games');

const getUserGames = async (req, res, next) => {
  try {
    const games = await gamesServices.getUserGames(req.user);

    if (games instanceof ErrorCreator) {
      return res.status(games.status).send({ message: games.message });
    }
    
    return res.status(StatusCodes.OK).send({ games });
  } catch (error) {
    next(error);
  }
};

module.exports = getUserGames;
