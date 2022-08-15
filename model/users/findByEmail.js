const dotenv = require('dotenv');
const getDBConnection = require('../connection');

dotenv.config();

const { DB_USERS_COLLECTION } = process.env;

const findByEmail = async (email) => {
  const db = await getDBConnection();

  const user = await db.collection(DB_USERS_COLLECTION).find({ email }).toArray();
  
  return user[0];
};

module.exports = findByEmail;
