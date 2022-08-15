const dotenv = require('dotenv');
const getDBConnection = require('../connection');

dotenv.config();
const { DB_GAMES_COLLECTION } = process.env;

const getUserGames = async (user) => {
  const db = await getDBConnection();
  
  const games = db.collection(DB_GAMES_COLLECTION).find({ email: user.email }).toArray();
  
  return games;
};

module.exports = getUserGames;
