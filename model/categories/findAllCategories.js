const dotenv = require('dotenv');
const getDBConnection = require('../connection');

dotenv.config();
const { DB_CATEGORIES_COLLECTION } = process.env;

const findAllCategories = async (user) => {
  const db = await getDBConnection();

  const categories = await db.collection(DB_CATEGORIES_COLLECTION).find({ user: user.email }).toArray();

  return categories;
};

module.exports = findAllCategories;
