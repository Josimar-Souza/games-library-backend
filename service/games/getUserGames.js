const { StatusCodes } = require('http-status-codes');
const gamesModels = require('../../model/games');
const usersModels = require('../../model/users');
const ErrorCreator = require('../../helpers/errorCreator');

const getUserGames = async (user) => {
  const userFounded = await usersModels.findByEmail(user.email);
  
  if (!userFounded) {
    const error = new ErrorCreator('User not registered!', StatusCodes.BAD_REQUEST);
    return error;
  }
  
  const games = await gamesModels.getUserGames(user);
  
  return games;
}

module.exports = getUserGames;
