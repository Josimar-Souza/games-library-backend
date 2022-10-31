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
    .required()
    .uri(),
  metacritic: joi.object({
    metascore: joi.number().required(),
    userscore: joi.number().required(),
  }).required(),
  image: joi.string()
    .required()
    .uri(),
  backdrop: joi.string()
    .required()
    .uri(),
  category: joi.string()
    .required()
    .min(3)
    .max(20),
});

module.exports = (value) => addGameSchema.validate(value);
