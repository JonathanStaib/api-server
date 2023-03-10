'use strict';

const express = require('express');
const logger = require('./middleware/logger.js');
const notFound = require('./handlers/404');
const errorHandler = require('./handlers/500');
const customerRouter = require('./routes/customer');
const cityRouter = require('./routes/city');
const PORT = process.env.PORT || 3001;

// creates an express singleton
const app = express();

app.use(express.json());
app.use(customerRouter);
app.use(cityRouter);
app.use(logger);

app.get('/', (req, res, next) => {

  res.status(200).send('Hello World!');
});

app.get('/bad', (req, res, next) => {
  next('we have an error');
});

app.use('*', notFound);
app.use(errorHandler);

const start = () => {
  app.listen(PORT, () => console.log('server running on port', PORT));
};

module.exports = { start, app };
