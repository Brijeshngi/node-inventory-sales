import express from "express";
import { addCriteria } from "../controllers/criteriaController.js";

const router = express.Router();

router.route("/criteria").post(addCriteria);

export default router;
