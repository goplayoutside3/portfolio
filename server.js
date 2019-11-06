const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');
const directions = require('./pages/api/directions')

const PORT = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });

app.prepare().then(() => {
  const server = express();
  server.get('/api/cta');
  server.post('/api/directions', bodyParser.json(), directions);
  server.listen(PORT, () => process.stdout.write(`Point your browser to: http://localhost:${PORT}\n`));
});
