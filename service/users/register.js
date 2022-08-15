const { StatusCodes } = require('http-status-codes');
const userModels = require('../../model/users');
const usersValidations = require('../../validations/users');
const ErrorCreator = require('../../helpers/errorCreator');

const registerUser = async (newUser) => {
    const validationResult = usersValidations.register(newUser);

    if ('error' in validationResult) {
      const error = new ErrorCreator(validationResult.error.message, StatusCodes.BAD_REQUEST);
      return error;
    }

    const user = await userModels.findByEmail(newUser.email);

    if (user) {
      const error = new ErrorCreator('User already registered', StatusCodes.BAD_REQUEST);
      return error;
    }

    const registeredUser = await userModels.registerUser(newUser);

    return registeredUser;
};

module.exports = registerUser;
