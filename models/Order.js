import mongoose from "mongoose";

const schema = mongoose.Schema({
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
  date: {
    type: Date,
    Date: Date.now(),
  },
  products: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  Deal: {
    type: String,
  },
  quantity: {
    type: String,
    required: true,
  },
  rate: {
    type: String,
    required: true,
  },
  CGST: {
    type: String,
    required: true,
  },
  SGST: {
    type: String,
    required: true,
  },
  net: {
    type: String,
    required: true,
  },
  total_value: {
    type: String,
    required: true,
  },
  discount_value: {
    type: String,
    required: true,
  },
  taxable_value: {
    type: String,
    required: true,
  },
  GST_total: {
    type: String,
    required: true,
  },
  payment_mode: {
    type: String,
    enum: ["Credit", "Cash"],
  },
  payable_value: {
    type: String,
    required: true,
  },
  E_way_bill: {
    bill_no: String,
    amount: String,
  },
  note: {
    type: String,
  },
  createdAt: {
    type: Date,
    Date: Date.now(),
  },
});
