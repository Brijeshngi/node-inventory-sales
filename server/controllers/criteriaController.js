import "express-async-errors";

import ErrorHandler from "../utils/errorHandler.js";

import { Criteria } from "../models/Criteria.js";

export const addCriteria = async (req, res, next) => {
  const { name } = req.body;

  if (!name) return next(new ErrorHandler("please provide name", 400));

  const data = await Criteria.create({
    name,
  });

  res.status(201).json({
    success: true,
    message: `${name} added to criteria`,
  });
};
