const { StatusCodes } = require('http-status-codes');
const userModels = require('../../model/users');
const usersValidations = require('../../validations/users');
const ErrorCreator = require('../../helpers/errorCreator');

const registerUser = async (newUser) => {
  try {
    const validationResult = usersValidations.register(newUser);
    
    if ('error' in validationResult) {
      const error = new ErrorCreator('invalid user credentials', StatusCodes.BAD_REQUEST);
      return error;
    }
    
    const registeredUser = await userModels.registerUser(newUser);
    
    return registeredUser;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = registerUser;
