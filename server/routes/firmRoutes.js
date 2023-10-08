import express from "express";
import { addFirm } from "../controllers/firmController.js";

const router = express.Router();

router.route("/firm").post(addFirm);

export default router;
