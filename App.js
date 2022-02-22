const express = require("express");
const app = express();
const swaggerJSON = require("./swagger.json");
const swaggerUI = require("swagger-ui-express");
const { PORT = 3000 } = process.env;

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJSON));

app.listen(PORT, () => {
  console.log(`Server nyala di port ${PORT}`);
});
