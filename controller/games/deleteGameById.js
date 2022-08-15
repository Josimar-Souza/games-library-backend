const { StatusCodes } = require('http-status-codes');
const ErrorCreator = require('../../helpers/errorCreator');
const gamesServices = require('../../service/games');

const deleteGameById = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const result = await gamesServices.deleteGameById(id, req.user);
    
    if (result instanceof ErrorCreator) {
      return res.status(result.status).send({ message: result.message });
    }
    
    return res.status(StatusCodes.OK).send({ message:  result});
  } catch (error) {
    next(error);
  }
};

module.exports = deleteGameById;
