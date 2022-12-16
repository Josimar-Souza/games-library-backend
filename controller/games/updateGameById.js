const { StatusCodes } = require('http-status-codes');
const ErrorCreator = require('../../helpers/errorCreator');
const gamesService = require('../../service/games');

const updateGameById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updatedGame = await gamesService.updateGameById(id, req.body);

    if (updatedGame instanceof ErrorCreator) {
      console.log(updatedGame.status);
      return res.status(updatedGame.status).json({ message: updatedGame.message });
    }

    return res.status(StatusCodes.OK).json({ message: 'Game successfully updated!' });
  } catch (error) {
    next(error);
  }
}

module.exports = updateGameById;
