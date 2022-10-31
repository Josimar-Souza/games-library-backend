const dotenv = require('dotenv');
const getDBConnection = require('../connection');

dotenv.config();
const { DB_CATEGORIES_COLLECTION } = process.env;

const findCategory = async (category) => {
  const db = await getDBConnection();

  const categoryFounded = await db.collection(DB_CATEGORIES_COLLECTION).findOne({ category }).toArray();

  return categoryFounded[0];
};

module.exports = findCategory;
