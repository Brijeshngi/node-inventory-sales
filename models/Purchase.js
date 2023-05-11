import mongoose from "mongoose";

const schema = mongoose.Schema({
  bill_number: {
    type: String,
    required: true,
  },
  bill_date: {
    type: Date,
    required: true,
  },
  firm_name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Firm",
  },
  GSTIN: {
    type: String,
  },
  invoice_value: {
    type: String,
    required: true,
  },
  taxable_value: {
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
  createdAt: {
    type: String,
  },
});

export const Purchase = mongoose.model("Purchase", schema);
