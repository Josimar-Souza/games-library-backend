const joi = require('joi');

const updateGameSchema = joi.object({
  title: joi.string()
    .min(3)
    .max(35),
  releaseYear: joi.string()
    .length(10)
    .regex(/^(\d){2}(\/)(\d){2}(\/)(\d){4}$/),
  sinopse: joi.string()
    .min(10)
    .max(100),
  developer: joi.string()
    .min(5),
  publisher: joi.string()
    .min(5),
  platforms: joi.array()
    .items(joi.string().min(5)),
  trailerURL: joi.string()
    .uri(),
  metacritic: {
    metascore: joi.number(),
    userscore: joi.number(),
  },
});

module.exports = (value) => updateGameSchema.validate(value);
