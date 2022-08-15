const dotenv = require('dotenv');
const getDBConnection = require('../connection');

dotenv.config();
const { DB_GAMES_COLLECTION } = process.env;

const getUserGames = async (user) => {
  const db = await getDBConnection();
  
  const games = await db.collection(DB_GAMES_COLLECTION).find({ user: user.email }).toArray();
  console.log(games);
  return games;
};

module.exports = getUserGames;
