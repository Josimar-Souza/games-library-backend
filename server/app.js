const express = require('express');
const rootRouter = require('../controller/rootRouter');
const Error = require('../middlewares/Error');

const app = express();

app.use(express.json());

rootRouter(app);

app.use(Error);

module.exports = app;
