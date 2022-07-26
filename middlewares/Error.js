const { StatusCodes } = require('http-status-codes');

const Error = (err, req, res, next) => {
  console.log(err.message);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Internal server error' });
};

module.exports = Error;
