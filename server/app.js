const express = require('express');
const cors = require('cors');
const rootRouter = require('../controller/rootRouter');
const Error = require('../middlewares/Error');

const app = express();

app.use(cors());

app.use(express.json());

rootRouter(app);

app.use(Error);

module.exports = app;
