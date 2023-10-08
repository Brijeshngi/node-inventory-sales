import { Sale } from "../models/Sale.js";
import "express-async-errors";
import ErrorHandler from "../utils/errorHandler.js";

export const createSale = async (req, res, next) => {
  const { bill_no, date, value } = req.body;

  await Sale.create({
    bill_no,
    date,
    value,
  });

  res.status(201).json({
    success: true,
    message: `Sale created with bill number: ${bill_no}`,
  });
};

export const editSale = async (req, res, next) => {
  const { id } = req.params;

  const data = await Sale.findById(id);

  if (!data) return next(new ErrorHandler("no data found", 404));

  const { bill_no, date, value } = req.body;

  if (!bill_no || !date || !value)
    return next(new ErrorHandler("please provide all details"));

  data.bill_no = bill_no;
  data.date = date;
  data.value = value;

  await data.save();

  res.status(200).json({
    success: true,
    message: `Sale updated `,
  });
};

export const saleOfDay = async (req, res, next) => {
  const saleData = await Sale.find({});
  res.status(200).json({
    success: true,
    saleData,
  });
};

export const saleOfMonth = async (req, res, next) => {
  const data = await Sale.find({});
  res.status(200).json({
    success: true,
    data,
  });
};

export const saleForDays = async (req, res, next) => {
  const data = await Sale.find({});
  res.status(200).json({
    success: true,
    data,
  });
};
