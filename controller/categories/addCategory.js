const { StatusCodes } = require('http-status-codes');
const ErrorCreator = require('../../helpers/errorCreator');
const categoriesService = require('../../service/categories');

const addCategory = async (req, res, next) => {
  try {
    const addedCategory = await categoriesService.addCategory(req.body, req.user);

    if (addedCategory instanceof ErrorCreator) {
      return res.status(addedCategory.status).json({ message: addedCategory.message });
    }

    return res.status(StatusCodes.CREATED).json({ category: addedCategory });
  } catch (error) {
    next(error);
  }
};

module.exports = addCategory;
