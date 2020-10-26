const app = require('./app');
const http = require('http');
const config = require('./utils/config')

const PORT = config.PORT;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(('server running on', PORT));
});
