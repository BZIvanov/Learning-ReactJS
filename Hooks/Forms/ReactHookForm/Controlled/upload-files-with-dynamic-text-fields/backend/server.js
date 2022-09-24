const http = require('http');
const app = require('./src/app');

const server = http.createServer(app);

const startServer = () => {
  const PORT = process.env.PORT || 4000;
  server.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
};

startServer();
