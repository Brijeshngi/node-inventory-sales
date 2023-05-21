import express from "express";
import { addCustomer } from "../controllers/customerController";

const router = express.Router();

router.route("/customer").post(addCustomer);

export default router;
