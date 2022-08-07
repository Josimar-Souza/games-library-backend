const joi = require('joi');

const addGameSchema = joi.object({
  title: joi.string()
    .min(3)
    .required()
    .max(35),
  releaseYear: joi.string()
    .length(10)
    .required()
    .regex(/^(\d){2}(\/)(\d){2}(\/)(\d){4}$/),
  sinopse: joi.string()
    .min(10)
    .required()
    .max(100),
  developer: joi.string()
    .required()
    .min(5),
  publisher: joi.string()
    .required()
    .min(5),
  platforms: joi.array()
    .required()
    .items(joi.string().min(5)),
  trailerURL: joi.string()
    .uri(),
  metacritic: {
    metascore: joi.number(),
    userscore: joi.number(),
  },
});

module.exports = (value) => addGameSchema.validate(value);
