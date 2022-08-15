const { StatusCodes } = require('http-status-codes');
const usersServices = require('../../service/users');
const ErrorCreator = require('../../helpers/errorCreator');

const registerUser = async (req, res, next) => {
  try {
    const registeredUser = await usersServices.registerUser(req.body);

    if (registeredUser instanceof ErrorCreator) {
      return res.status(registeredUser.status).send({ message: registeredUser.message })
    }

    return res.status(StatusCodes.CREATED).send({ newUser: registeredUser });
  } catch (error) {
    next(error)
  }
};

module.exports = registerUser;
