const dotenv = require('dotenv');
const getDBConnection = require('../connection');

dotenv.config();

const {
  DB_USERS_COLLECTION
} = process.env;

const login = async (user) => {
  const db = await getDBConnection();

  const userFounded = await db.collection(DB_USERS_COLLECTION).find({ email: user.email }).toArray();

  return userFounded[0];
};

module.exports = login;
