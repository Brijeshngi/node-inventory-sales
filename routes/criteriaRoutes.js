import express from "express";
import { addCriteria } from "../controllers/criteriaController";

const router = express.Router();

router.route("/criteria").post(addCriteria);

export default router;
