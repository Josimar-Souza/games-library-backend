const dotenv = require('dotenv');
const { ObjectId } = require('mongodb');
const getDBConnection = require('../connection');

dotenv.config();

const {
  DB_USERS_COLLECTION,
} = process.env;

const registerUser = async (newUser) => {
  const db = await getDBConnection();

  const { insertedId: id } = await db.collection(DB_USERS_COLLECTION).insertOne(newUser);

  const { password, ...userWithoutPassword } = newUser;

  const user = {
    ...userWithoutPassword,
    _id: ObjectId(id),
  }

  return user;
};

module.exports = registerUser;
