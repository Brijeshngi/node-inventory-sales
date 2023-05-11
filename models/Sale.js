import mongoose from "mongoose";

const schema = mongoose.Schema({
  bill_no: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
  },
  date: {
    type: Date,
    // order_date
  },
  value: {
    type: String,
    // order_value
  },
  sale_of_the_day: {
    type: String,
  },
  createdAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const Sale = mongoose.model("Sale", schema);
