import jwt from "jsonwebtoken";
import "express-async-errors";
import { Admin } from "../models/Admin.js";
import ErrorHandler from "../utils/errorHandler.js";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return next(new ErrorHandler("Please log-in again", 401));

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await Admin.findById(decoded._id);

  next();
};
