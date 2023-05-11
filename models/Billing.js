import mongoose from "mongoose";

const schema = mongoose.Schema({
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
  bill_no: {
    type: String,
  },
  amount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
  },
  date: {
    type: Date,
    Date: Date.now(),
  },
  mode: {
    type: String,
    enum: ["CREDIT", "CASH"],
    transaction: {
      type: String,
    },
    Date: String,
    amount: String,
  },
  due: {
    type: String,
  },
  status: {
    type: String,
    enum: ["PAID", "PENDING"],
  },
});

export const Billing = mongoose.model("Billing", schema);
