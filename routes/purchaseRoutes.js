import express from "express";
import {
  createPurchase,
  editPurchase,
  purchaseForDays,
  purchaseOfDay,
  purchaseOfMonth,
} from "../controllers/purchaseController";

const router = express.Router();

router.route("/purchase").post(createPurchase).get(purchaseOfDay);
router.route("/purchase?:id").put(editPurchase);
router.route("/purchaseofmonth").get(purchaseOfMonth);
router.route("/purchasefordays").get(purchaseForDays);

export default router;
