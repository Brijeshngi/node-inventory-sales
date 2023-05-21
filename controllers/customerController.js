import "express-async-errors";

import ErrorHandler from "../utils/errorHandler.js";

import { Customer } from "../models/Customer.js";

export const addCustomer = async (req, res, next) => {
  const { name, email, contact, Firm_name, customer_type, rewards } = req.body;

  if (!name || !email || !contact || !Firm_name || !customer_type || !rewards)
    return next(new ErrorHandler("please provide all details", 400));

  const data = await Customer.create({
    name,
    email,
    contact,
    Firm_name,
    customer_type,
    rewards,
  });

  res.status(201).json({
    success: true,
    message: `${name} with firm ${Firm_name} added`,
  });
};
