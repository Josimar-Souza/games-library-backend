const { StatusCodes } = require('http-status-codes');
const categoriesModel = require('../../model/categories');
const categoriesValidations = require('../../validations/categories');
const ErrorCreator = require('../../helpers/errorCreator');

const addCategory = async (categoryToAdd) => {
  const validationResult = categoriesValidations.addCategory(categoryToAdd);

  if ('error' in validationResult) {
    const error = new ErrorCreator(validationResult.error.message, StatusCodes.BAD_REQUEST);
    return error;
  }

  const { category } = categoryToAdd
  const categoryFounded = await categoriesModel.findCategory(category);

  if (categoryFounded) {
    const error = new ErrorCreator('Category already added', StatusCodes.BAD_REQUEST);
    return error;
  }

  const addedCategory = await categoriesModel.addCategory(categoryToAdd);

  return addedCategory;
};

module.exports = addCategory;
