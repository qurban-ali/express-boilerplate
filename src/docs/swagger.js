const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API Boilerplate',
      version: '1.0.0',
      description: 'API documentation for Express Boilerplate'
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'The auto-generated id of the user'
            },
            name: {
              type: 'string',
              description: 'The name of the user'
            },
            email: {
              type: 'string',
              description: 'The email of the user'
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'The timestamp when the user was created'
            }
          }
        }
      }
    }
  },
  apis: [__dirname + '/../routes/*.js'], // Scan route files for docs
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
