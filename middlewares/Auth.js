const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { StatusCodes } = require('http-status-codes');

dotenv.config();

const { TOKEN_PRIVATE_KEY } = process.env;

const Auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(StatusCodes.UNAUTHORIZED).send({ message: 'token not found' });
    }
    
    try {
      const user = jwt.verify(authorization, TOKEN_PRIVATE_KEY);
      req.user = user;
      next()
    } catch (error) {
      return res.status(StatusCodes.UNAUTHORIZED).send({ message: 'Invalid token' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = Auth;
