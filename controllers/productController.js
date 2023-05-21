import "express-async-errors";
import { Product } from "../models/Product.js";
import ErrorHandler from "../utils/errorHandler.js";

export const addProduct = async (req, res, next) => {
  const {
    name,
    type,
    stock_value,
    batch_no,
    mfg_date,
    quantity,
    packing,
    rate,
    CGST,
    SGST,
    discount,
    Deal,
    net,
  } = req.body;

  if (
    !name ||
    !type ||
    !stock_value ||
    !batch_no ||
    !mfg_date ||
    !quantity ||
    !packing ||
    !rate ||
    !CGST ||
    !SGST ||
    !discount ||
    !Deal ||
    !net
  )
    return next(new ErrorHandler("Please provide all data", 400));

  const data = await Product.create({
    name,
    type,
    stock_value,
    batch_no,
    mfg_date,
    quantity,
    packing,
    rate,
    CGST,
    SGST,
    discount,
    Deal,
    net,
  });

  res.status(201).json({
    success: true,
    message: `Product Added `,
  });
};

export const editProduct = async (req, res, next) => {
  const { id } = req.params;

  const data = await Product.findById(id);

  if (!data) return next(new ErrorHandler("no data found", 404));

  const {
    name,
    type,
    stock_value,
    batch_no,
    mfg_date,
    quantity,
    packing,
    rate,
    CGST,
    SGST,
    discount,
    Deal,
    net,
  } = req.body;

  if (
    !name ||
    !type ||
    !stock_value ||
    !batch_no ||
    !mfg_date ||
    !quantity ||
    !packing ||
    !rate ||
    !CGST ||
    !SGST ||
    !discount ||
    !Deal ||
    !net
  )
    return next(new ErrorHandler("please rpovide all details", 400));

  data.name = name;
  data.type = type;
  data.stock_value = stock_value;
  data.batch_no = batch_no;
  data.mfg_date = mfg_date;
  data.quantity = quantity;
  data.packing = packing;
  data.rate = rate;
  data.CGST = CGST;
  data.SGST = SGST;
  data.discount = discount;
  data.Deal = Deal;
  data.net = net;

  await data.save();

  res.status(200).json({
    success: true,
    message: `product updated `,
  });
};

export const productList = async (req, res, next) => {
  const data = await Product.find({});

  if (data.length >= 0)
    return next(new ErrorHandler("No products are there", 404));

  res.status(200).json({
    data,
  });
};
export const findOneProduct = async (req, res, next) => {
  const { id } = req.params;

  const data = await Product.findOne(id);

  if (!data) return next(new ErrorHandler("no data found", 404));

  res.status(200).json({
    data,
  });
};

export const searchProduct = async (req, res, next) => {
  const data = await Product.findOne({ name: `$regex` });

  if (!data) return next(new ErrorHandler("Not found", 404));

  res.status(200).json({
    data,
  });
};

// sort
// filter
// reduce
