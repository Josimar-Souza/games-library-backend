const { StatusCodes } = require('http-status-codes');
const categoriesModel = require('../../model/categories');
const categoriesValidations = require('../../validations/categories');
const ErrorCreator = require('../../helpers/errorCreator');

const addCategory = async (categoryToAdd, user) => {
  const validationResult = categoriesValidations.addCategory(categoryToAdd);

  if ('error' in validationResult) {
    const error = new ErrorCreator(validationResult.error.message, StatusCodes.BAD_REQUEST);
    return error;
  }

  const categoryFounded = await categoriesModel.findCategory(categoryToAdd.category, user.email);


  if (categoryFounded) {
    const error = new ErrorCreator('Category already added', StatusCodes.BAD_REQUEST);
    return error;
  }

  const newCategory = {
    ...categoryToAdd,
    user: user.email,
  };

  const addedCategory = await categoriesModel.addCategory(newCategory);

  return addedCategory;
};

module.exports = addCategory;
