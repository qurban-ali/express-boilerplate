const mongoose = require('mongoose');
const logger = require('../utils/logger');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
    // Log successful connection
    logger.success('MongoDB Connected', {
      host: conn.connection.host,
      name: conn.connection.name
    });

    // Monitor database events
    mongoose.connection.on('error', (err) => {
      logger.error('MongoDB error:', { error: err.message });
    });

    mongoose.connection.on('disconnected', () => {
      logger.warn('MongoDB disconnected');
    });

    mongoose.connection.on('reconnected', () => {
      logger.info('MongoDB reconnected');
    });

  } catch (error) {
    logger.error('MongoDB connection failed:', { error: error.stack });
    process.exit(1);
  }
};

module.exports = connectDB;
