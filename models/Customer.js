import mongoose from "mongoose";
import validator from "validator";

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [20, "Required 20 characters only"],
  },
  email: {
    type: String,
    required: true,
    validate: validator.isEmail,
  },
  contact: {
    type: String,
    required: true,
    minlength: [10, "Required 10 characters only"],
  },
  DL: {
    type: String,
    required: true,
  },
  Food_License: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  PIN: {
    type: String,
    required: true,
  },
  Firm_name: {
    type: String,
    required: true,
  },
  GSTIN: {
    type: String,
    required: true,
  },
  customer_type: {
    type: String,
    required: true,
    enum: ["Retail", "Whole-sellar"],
  },
  Credit_limit: {
    type: String,
    required: true,
  },
  rewards: {
    type: String,
    required: true,
  },
  bills: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "billing",
      mode: String,
      status: {
        enum: ["Paid", "Pending"],
      },
    },
  ],
  createdAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const Customer = mongoose.model("Customer", schema);
