const dotenv = require('dotenv');
const { ObjectId } = require('mongodb');
const getDBConnection = require('../connection');

dotenv.config();
const { DB_GAMES_COLLECTION } = process.env;

const findGameById = async (id) => {
  const db = await getDBConnection();

  const game = await db.collection(DB_GAMES_COLLECTION).find({ _id: ObjectId(id) }).toArray();

  return game[0];
};

module.exports = findGameById;
