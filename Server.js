const app = require('./app');
const config = require('./config/config');

// Check if we're in a serverless environment
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  // Local development - listen on port
  app.listen(config.port, () => {
    console.log(`🚀 Server running at http://localhost:${config.port}`);
    console.log(`📡 Webhook endpoint: http://localhost:${config.port}/webhook`);
  });
} else {
  // Serverless environment (Vercel) - export the app
  module.exports = app;
}