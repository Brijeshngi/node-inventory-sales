import express from "express";
import {
  cancelOrder,
  createOrder,
  editOrder,
  updateEWayBill,
} from "../controllers/orderController.js";

const router = express.Router();

router.route("/order").post(createOrder);
router.route("/order/:id").put(editOrder);
router.route("/order/eway/:id").put(updateEWayBill);
router.route("/order/cancel/:id").put(cancelOrder);

export default router;
