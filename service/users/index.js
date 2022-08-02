const registerUser = require('./register');
const login = require('./login');

const usersService = {
  registerUser,
  login,
};

module.exports = usersService;
