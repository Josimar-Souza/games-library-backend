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
  try {
    const validationResult = userValidations.login(user);

    if ('error' in validationResult) {
      const error = new ErrorCreator(validationResult.error.message, StatusCodes.BAD_REQUEST);
      return error;
    }
    
    const userFounded = await userModels.login(user);

    if (!userFounded.email) {
      const error = new ErrorCreator('User not found', StatusCodes.BAD_REQUEST);
      return error;
    }
    
    const token = getToken(userFounded);
    
    return token;
  } catch (error) {
    console.log(error);
  }
};

module.exports = login;
