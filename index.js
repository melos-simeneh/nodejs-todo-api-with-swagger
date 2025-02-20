const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

const { setupSwagger } = require("./utils/swagger.config");

app.use(express.json());
app.use(morgan("combined"));

const todoRoutes = require("./routes/todo.routes");

app.use("/docs", setupSwagger());

app.use(todoRoutes);

app.listen(port, () => {
  console.log(`Todo API Server running on http://localhost:${port}`);
  console.log(`Swagger UI available at http://localhost:${port}/docs`);
});
