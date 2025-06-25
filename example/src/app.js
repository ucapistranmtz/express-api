const express = require('express');
const userRoutes = require('./routes/userRoutes');
const { logger } = require('./middleware/logger');

const app = express();
app.use(express.json());
app.use(logger);
app.use('/users', userRoutes);

module.exports = app;
