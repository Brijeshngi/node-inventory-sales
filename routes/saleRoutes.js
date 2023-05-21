import express from "express";
import { createSale, editSale, saleOfDay } from "../controllers/saleController";

const router = express.Router();

router.route("/sale").post(createSale).get(saleOfDay);
router.route("/sale/:id").put(editSale);

export default router;
