const registerUser = require('./register');
const login = require('./login');
const findByEmail = require('./findByEmail');

const userModels = {
  registerUser,
  login,
  findByEmail,
};

module.exports = userModels;
