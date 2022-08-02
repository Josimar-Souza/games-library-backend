const joi = require('joi');

const loginSchema = joi.object({
  email: joi.string()
    .email()
    .required()
    .messages({
      'string.base': '"email" must be a string',
      'string.empty': '"email" must not be empty',
    }),
  password: joi.string()
    .regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&*])[a-zA-Z\d!#$%&*]{8,12}/)
    .required()
    .messages({
      'string.base': '"password" must be a string',
      'string.empty': '"password" must not be empty',
      'string.pattern.base': '"password" must contain more than 7 characters and less than 13 characters, and at least a lower case letter, upper case letter, a number and one of this symbols (!#$%&*)',
    }),
});

module.exports = (value) => loginSchema.validate(value);
