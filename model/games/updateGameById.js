const { ObjectId } = require('mongodb');
const dotenv = require('dotenv');
const getDBConnection = require('../connection');

dotenv.config();

const { DB_GAMES_COLLECTION } = process.env;

const updateGameById = async (id, newValues) => {
  const db = await getDBConnection();

  const updatedGame = await db.collection(DB_GAMES_COLLECTION).updateOne(
    { _id: ObjectId(id) },
    { $set: newValues },
  );

  return updatedGame;
};

module.exports = updateGameById;
