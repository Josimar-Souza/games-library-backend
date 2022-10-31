const { StatusCodes } = require('http-status-codes');
const categoriesService = require('../../service/categories');

const findAllCategories = async (req, res, next) => {
  try {
    const categories = await categoriesService.findAllCategories(req.user);

    return res.status(StatusCodes.OK).json({ categories });
  } catch (error) {
    next(error);
  }
}

module.exports = findAllCategories;
