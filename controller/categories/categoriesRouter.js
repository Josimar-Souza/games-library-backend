const { Router } = require('express');
const Auth = require('../../middlewares/Auth');
const addCategory = require('./addCategory');

const categoriesRouter = Router({ mergeParams: true });

categoriesRouter.post('/', Auth, addCategory);

module.exports = (rootRouter) => {
  rootRouter.use('/category', categoriesRouter);
};