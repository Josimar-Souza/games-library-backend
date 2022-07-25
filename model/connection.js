const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const {
  DB_URL,
  DB_NAME,
} = process.env;

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

const getDBConnection = async () => {
  try {
    if (!db) {
      db = (await MongoClient.connect(DB_URL, connectionOptions)).db(DB_NAME);
    }
    
    return db;
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = getDBConnection;
