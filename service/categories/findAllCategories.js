const categoriesService = require('../../model/categories');

const findAllCategories = async (user) => {
  const categories = await categoriesService.findAllCategories(user);

  return categories;
};

module.exports = findAllCategories;
