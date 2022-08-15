const dotenv = require('dotenv');
const { ObjectId } =  require('mongodb');
const getDBConnection = require('../connection');

dotenv.config();
const { DB_GAMES_COLLECTION } = process.env;

const deleteGameById = async (id) => {
  const db = await getDBConnection();

  const deletedGame = await db.collection(DB_GAMES_COLLECTION).deleteOne({ _id: ObjectId(id) });

  return deletedGame;
};

module.exports = deleteGameById;
