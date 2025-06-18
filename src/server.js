const app = require('./app');
const logger = require('./utils/logger');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 3000;

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception:', { error: error.stack });
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection:', { reason, promise });
  process.exit(1);
});

const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();
    logger.success('MongoDB connected');

    // Start the server
    app.listen(PORT, () => {
      logger.success(`Server running on http://localhost:${PORT}`);
      logger.info('Environment:', { 
        NODE_ENV: process.env.NODE_ENV || 'development',
        PORT: PORT
      });
    });

  } catch (error) {
    logger.error('Failed to start server:', { error: error.stack });
    process.exit(1);
  }
};

startServer();
