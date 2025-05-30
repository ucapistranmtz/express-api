const express = require('express');
const router = require('./routes');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Api running', status: 'Up' });
});

app.use(router);
app.listen(port, () => {
  console.log(`Api running at  http://localhost:${port}`);
});
