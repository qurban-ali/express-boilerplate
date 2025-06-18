const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
const mainRoutes = require('./routes');
app.use('/api', mainRoutes);

// Setup Swagger documentation
const setupSwagger = require('./docs/swagger');
setupSwagger(app);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';
  res.status(status).json({ message });
});


module.exports = app;
