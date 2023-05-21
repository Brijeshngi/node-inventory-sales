import express from "express";
import { allPacking, createPacking } from "../controllers/packingController";

const router = express.Router();

router.route("/packing").post(createPacking).get(allPacking);
export default router;
