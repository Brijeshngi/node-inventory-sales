import express from "express";
import { pay } from "../controllers/paymentController";

const router = express.Router();

router.route("/pay").post(pay);

export default router;
