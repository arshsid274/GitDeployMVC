const express = require('express');
const homeRoutes = require('./routes/homeRoutes');
const githubRoutes = require('./routes/githubRoutes');

const app = express();

app.use(express.json());
app.use('/', homeRoutes);
app.use('/', githubRoutes);

app.use((error, req, res, next) => {
  res.status(500).send({ error: error.message });
  console.error(error.stack);
  next(error);
});

module.exports = app;
