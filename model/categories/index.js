const addCategory = require('./addCategory');
const findCategory = require('./findCategory');
const findAllCategories = require('./findAllCategories');

const categoriesModel = {
  addCategory,
  findCategory,
  findAllCategories,
};

module.exports = categoriesModel;
