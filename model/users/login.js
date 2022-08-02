const dotenv = require('dotenv');
const getDBConnection = require('../connection');

dotenv.config();

const {
  DB_USERS_COLLECTION
} = process.env;

const login = async (user) => {
  try {
    const db = await getDBConnection();

    const userFounded = await db.collection(DB_USERS_COLLECTION).find({ email: user.email });

    return userFounded;
  } catch (error) {
    console.log(error);
  }
};

module.exports = login;
