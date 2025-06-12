// const app = require('./app');
// const config = require('./config/config');

// app.listen(config.port, () =>
//   console.log(`Server running at http://localhost:${config.port}`)
// );
const app = require('./app');
const config = require('./config/config');

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(config.port, () =>
    console.log(`Server running at http://localhost:${config.port}`)
  );
}

// Export for serverless environment
module.exports = app;
