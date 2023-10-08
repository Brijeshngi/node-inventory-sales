import express from "express";
import { addCustomer } from "../controllers/customerController.js";

const router = express.Router();

router.route("/customer").post(addCustomer);

export default router;
