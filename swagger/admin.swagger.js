const swaggerJsDoc = require('swagger-jsdoc');

const adminOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Admin API',
      version: '1.0.0',
      description: 'Endpoints for admin-specific operations'
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
  apis: ['./routes/admin.routes.js']
};

module.exports = swaggerJsDoc(adminOptions);