const swaggerJsDoc = require('swagger-jsdoc');

const userOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User API',
      version: '1.0.0',
      description: 'Endpoints for user registration, login, profile, etc.'
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [{ bearerAuth: [] }]
  },
  apis: ['./routes/auth.routes.js', './routes/user.routes.js']
};

module.exports = swaggerJsDoc(userOptions);