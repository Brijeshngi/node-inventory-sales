import "express-async-errors";
import { Purchase } from "../models/Purchase.js";
import ErrorHandler from "../utils/errorHandler.js";

export const createPurchase = async (req, res, next) => {
  const {
    bill_number,
    bill_date,
    firm_name,
    GSTIN,
    invoice_value,
    taxable_value,
    CGST,
    SGST,
  } = req.body;

  if (
    !bill_number ||
    !bill_date ||
    !firm_name ||
    !GSTIN ||
    !invoice_value ||
    !taxable_value ||
    !CGST ||
    !SGST
  )
    return next(new ErrorHandler("please provide all details", 400));

  const data = await Purchase.create({
    bill_number,
    bill_date,
    firm_name,
    GSTIN,
    invoice_value,
    taxable_value,
    CGST,
    SGST,
  });

  res.status(201).json({
    success: true,
    message: `Purchase created with ${bill_number}`,
  });
};

export const editPurchase = async (req, res, next) => {
  const { id } = req.params;

  const data = await Purchase.findById(id);

  if (!data) return next(new ErrorHandler("no data found", 404));

  const {
    bill_number,
    bill_date,
    firm_name,
    GSTIN,
    invoice_value,
    taxable_value,
    CGST,
    SGST,
  } = req.body;

  if (
    !bill_number ||
    !bill_date ||
    !firm_name ||
    !GSTIN ||
    !invoice_value ||
    !taxable_value ||
    !CGST ||
    !SGST
  )
    return next(new ErrorHandler("please provide all details", 400));

  data.bill_number = bill_number;
  data.bill_date = bill_date;
  data.firm_name = firm_name;
  data.GSTIN = GSTIN;
  data.invoice_value = invoice_value;
  data.taxable_value = taxable_value;
  data.CGST = CGST;
  data.SGST = SGST;

  await data.save();

  res.status(200).json({
    success: true,
    message: `purchase data updated for bill number : ${bill_number}`,
  });
};

export const purchaseOfDay = async (req, res, next) => {
  const data = await Purchase.find({});
  res.status(200).json({
    success: true,
    data,
  });
};

export const purchaseOfMonth = async (req, res, next) => {
  const data = await Purchase.find({});
  res.status(200).json({
    success: true,
    data,
  });
};

export const purchaseForDays = async (req, res, next) => {
  const data = await Purchase.find({});
  res.status(200).json({
    success: true,
    data,
  });
};
