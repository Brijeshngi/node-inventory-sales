import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const Criteria = mongoose.model("Criteria", schema);
