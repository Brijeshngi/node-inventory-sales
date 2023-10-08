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
  Firm_name: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  customer_type: {
    type: String,
    required: true,
    enum: ["Retail", "Whole-sellar"],
  },
  Credit_limit: {
    type: String,
  },
  rewards: {
    type: String,
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
