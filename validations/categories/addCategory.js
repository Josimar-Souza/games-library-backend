const joi = require('joi');

const addCategorySchema = joi.object({
  category: joi.string().min(3).max(20).required()
});

module.exports = (value) => addCategorySchema.validate(value);
