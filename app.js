import express from "express";
import cookieParser from "cookie-parser";
import ErrorMiddleware from "./middleware/Error.js";
import cors from "cors";
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
app.use(cors());
app.use(cookieParser());

// import routes and use
import admin from "./routes/adminRoutes.js";
import billing from "./routes/billingRoutes.js";
import criteria from "./routes/criteriaRoutes.js";
import customer from "./routes/customerRoutes.js";
import firm from "./routes/firmRoutes.js";
import invoice from "./routes/invoiceRoutes.js";
import order from "./routes/orderRoutes.js";
import packing from "./routes/packingRoutes.js";
import product from "./routes/productRoutes.js";
import payment from "./routes/paymentRoutes.js";
import purchase from "./routes/purchaseRoutes.js";
import sale from "./routes/saleRoutes.js";
import subscription from "./routes/subscriptionRoutes.js";

app.use("/api/v1", admin);
app.use("/api/v1", billing);
app.use("/api/v1", criteria);
app.use("/api/v1", customer);
app.use("/api/v1", firm);
app.use("/api/v1", invoice);
app.use("/api/v1", order);
app.use("/api/v1", packing);
app.use("/api/v1", product);
app.use("/api/v1", payment);
app.use("/api/v1", purchase);
app.use("/api/v1", sale);
app.use("/api/v1", subscription);
app.use(ErrorMiddleware);

export default app;
