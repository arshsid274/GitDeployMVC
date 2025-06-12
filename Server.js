const app = require('./app');
const config = require('./config/config');

app.listen(config.port, () =>
  console.log(`Server running at http://localhost:${config.port}`)
);
