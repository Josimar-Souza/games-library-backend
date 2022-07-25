import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

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

const getConnection = async () => {
  try {
    if (!db) {
      db = await MongoClient.connect(DB_URL, connectionOptions).db(DB_NAME);
    }
    
    return db;
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default getConnection;
