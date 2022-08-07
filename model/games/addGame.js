const dotenv = require('dotenv')
const { ObjectId } = require('mongodb');
const getDBConnection = require('../connection');

dotenv.config();

const { DB_GAMES_COLLECTION } = process.env;

const addGame = async (newGame) => {
  try {
    const db = await getDBConnection();
    
    const { insertedId: id } = await db.collection(DB_GAMES_COLLECTION).insertOne(newGame);
    
    const gameAdded = {
      ...newGame,
      _id: ObjectId(id),
    };
    
    return gameAdded;
  } catch (error) {
    console.log(error);
  }
};

module.exports = addGame;
