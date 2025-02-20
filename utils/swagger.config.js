const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Todo API",
      version: "1.0.0",
      description: "A simple Express API to manage todos",
    },
  },
  apis: ["./routes/todo.routes.js"],
};

/**
 * This function initializes Swagger and returns the setup for Swagger UI.
 */
const setupSwagger = () => {
  const swaggerDocs = swaggerJsdoc(swaggerOptions);
  return [swaggerUi.serve, swaggerUi.setup(swaggerDocs)];
};

module.exports = {
  setupSwagger,
};
