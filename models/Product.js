import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Criteria",
  },
  stock_value: {
    type: String,
    required: true,
  },
  batch_no: {
    type: String,
    required: true,
  },
  mfg_date: {
    type: Date,
    required: true,
  },
  exp_date: {
    type: Date,
  },
  quantity: {
    type: String,
    required: true,
  },
  packing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Packing",
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
  discount: {
    type: String,
    required: true,
  },
  Deal: {
    type: String,
    required: true,
  },
  net: {
    type: String,
  },
  purchase_details: {},
});

export const Product = mongoose.model("Product", schema);
