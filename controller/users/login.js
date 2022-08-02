const { StatusCodes } = require('http-status-codes');
const ErrorCreator = require('../../helpers/errorCreator');
const userServices = require('../../service/users');

const login = async (req, res, next) => {
  try {
    const token = await userServices.login(req.body);
    console.log(token);
    if (token instanceof ErrorCreator) {
      return res.status(token.status).send({ message: token.message });
    }

    if (!token) {
      throw new Error();
    }
    
    return res.status(StatusCodes.OK).send({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = login;
