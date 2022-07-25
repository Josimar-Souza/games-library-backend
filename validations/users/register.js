const joi = require('joi');

const registerSchema = joi.object({
  username: joi.string()
    .min(5)
    .max(25)
    .required(),
  email: joi.string()
    .email()
    .required(),
  password: joi.string()
    .pattern(new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&*])[a-zA-Z\d!#$%&*]{8,12}'))
    .required(),
});

module.exports = (value) => registerSchema.validate(value);
