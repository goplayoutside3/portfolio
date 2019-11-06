const next = require('next');
const express = require('express');

const PORT = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });

app.prepare().then(() => {
  const server = express();
  server.get('/api/cta');
  server.get('/api/directions');
  server.listen(PORT, () => process.stdout.write(`Point your browser to: http://localhost:${PORT}\n`));
});
