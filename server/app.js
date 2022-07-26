const express = require('express');
const rootRouter = require('../controller/rootRouter');

const app = express();
app.use(express.json());

rootRouter(app);

module.exports = app;
