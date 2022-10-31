const dotenv = require('dotenv');
const { ObjectId } = require('mongodb');
const getDBConnection = require('../connection');

dotenv.config();

const { DB_CATEGORIES_COLLECTION } = process.env;

const addCategory = async (category) => {
  const db = await getDBConnection();

  const { insertedId: id } = await db.collection(DB_CATEGORIES_COLLECTION).insertOne(category);

  const addedCategory = {
    ...category,
    _id: ObjectId(id)
  };

  return addedCategory;
}

module.exports = addCategory;
