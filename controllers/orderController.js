import "express-async-errors";
import { Order } from "../models/Order.js";
import ErrorHandler from "../utils/errorHandler.js";

export const createOrder = async (req, res, next) => {
  const { customer_id, products, deal, quantity, payment_mode } = req.body;

  if (!customer_id || !products || !deal || !quantity || !payment_mode)
    return next(new ErrorHandler("please provide all details"));

  const data = await Order.create({
    customer_id,
    products,
    deal,
    quantity,
    rate,
    CGST,
    SGST,
    net,
    total_value,
    discount_value,
    taxable_value,
    GST_total,
    payment_mode,
    payable_value,
  });

  res.status(201).json({
    success: true,
    message: `Order Placed for ${customer_id}`,
  });
};

export const updateEWayBill = async (req, res, next) => {
  const { id } = req.params;

  const data = await Order.findById(id);

  if (!data) return next(new ErrorHandler("no data found", 404));

  const { E_Way_bill } = req.body;

  if (!E_Way_bill) return next(new ErrorHandler("please provide details", 400));

  data.E_Way_bill = E_Way_bill;

  await data.save();

  res.status(200).json({
    success: true,
    message: `updated on order ${id}`,
  });
};

export const editOrder = async (req, res, next) => {
  const { id } = req.params;

  const data = await Order.findById(id);

  if (!data) return next(new ErrorHandler("no data found", 404));

  const {
    customer_id,
    products,
    deal,
    quantity,
    rate,
    CGST,
    SGST,
    net,
    total_value,
    discount_value,
    taxable_value,
    GST_total,
    payment_mode,
    payable_value,
  } = req.body;

  if (
    !customer_id ||
    !products ||
    !deal ||
    !quantity ||
    !rate ||
    !CGST ||
    !SGST ||
    !net ||
    !total_value ||
    !discount_value ||
    !taxable_value ||
    !GST_total ||
    !payment_mode ||
    !payable_value
  )
    return next(new ErrorHandler("please provide all details"));

  data.customer_id = customer_id;
  data.products = products;
  data.deal = deal;
  data.quantity = quantity;
  data.rate = rate;
  data.CGST = CGST;
  data.SGST = SGST;
  data.net = net;
  data.total_value = total_value;
  data.discount_value = discount_value;
  data.taxable_value = taxable_value;
  data.GST_total = GST_total;
  data.payment_mode = payment_mode;
  data.payable_value = payable_value;

  await data.save();

  res.status(200).json({
    success: true,
    message: `Order updated for ${customer_id}`,
  });
};

export const cancelOrder = async (req, res, next) => {
  const { id } = req.params;

  const data = await Order.findById(id);

  if (!data) return next(new ErrorHandler("No data found", 404));

  const { status } = req.body;

  await Order.save();

  res.status(200).json({
    success: true,
    message: `Order Cancelled`,
  });
};
