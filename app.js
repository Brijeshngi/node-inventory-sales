import express from "express";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
config({
  path: "./config/config.env",
});
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
// import routes and use
import user from "./routes/userRoutes.js";
import payment from "./routes/paymentRoutes.js";

app.use("/api/v1", user);
app.use("/api/v1", payment);
app.use(ErrorMiddleware);

export default app;
