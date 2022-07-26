const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const ErrorCreator = require('../../helpers/errorCreator');
const userModels = require('../../model/users');
const userValidations = require('../../validations/users');

dotenv.config();

const { TOKEN_PRIVATE_KEY } = process.env;

const getToken = (user) => {
  const { email, username } = user
  const tokenOptions = {
    algorithm: 'HS256',
    expiresIn: '1h',
  }
  
  const paylaod = {
    email,
    username,
  };
  
  const token = jwt.sign(paylaod, TOKEN_PRIVATE_KEY, tokenOptions);
  
  return token;
}

const login = async (user) => {
  const validationResult = userValidations.login(user);

  if ('error' in validationResult) {
    const error = new ErrorCreator(validationResult.error.message, StatusCodes.BAD_REQUEST);
    return error;
  }

  const userFounded = await userModels.login(user);

  if (!userFounded) {
    const error = new ErrorCreator('User not found', StatusCodes.BAD_REQUEST);
    return error;
  }

  if (userFounded.password !== user.password) {
    const error = new ErrorCreator('Invalid email or password', StatusCodes.BAD_REQUEST);
    return error;
  }

  const token = getToken(userFounded);

  return token;
};

module.exports = login;
