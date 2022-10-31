const { Router } = require('express');
const Auth = require('../../middlewares/Auth');
const addCategory = require('./addCategory');
const findAllCategories = require('./findAllCategories');

const categoriesRouter = Router({ mergeParams: true });

categoriesRouter.post('/', Auth, addCategory);
categoriesRouter.get('/', Auth, findAllCategories);

module.exports = (rootRouter) => {
  rootRouter.use('/category', categoriesRouter);
};