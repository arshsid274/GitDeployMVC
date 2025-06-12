// const app = require('./app');
// const config = require('./config/config');

// app.listen(config.port, () =>
//   console.log(`Server running at http://localhost:${config.port}`)
// );
const app = require('./app');

// No need to listen to a port in serverless environment
// Vercel will handle the HTTP requests for us

// Export the Express app directly
module.exports = app;
