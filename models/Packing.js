import mongoose from "mongoose";

const schema = mongoose.Schema({
  packing_type: {
    type: String,
    required: true,
  },
  packing_quantity: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
});

export const Packing = mongoose.model("Packing", schema);
