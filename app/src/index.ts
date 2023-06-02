import express, { Application } from "express";
import swaggerUi  from "swagger-ui-express";
import { swaggerSpec } from "./config/docs";
import morgan from "morgan";
import cors from "cors";

const app: Application = express();

require("./config/database");

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use("/products", require("./routes/products.routes"));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.set("port", process.env.port || "4000");
app.listen(app.get("port"), () => {
  console.log("💻 Server running on port:", app.get("port"));
});
