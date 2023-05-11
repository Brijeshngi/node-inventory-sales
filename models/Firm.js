import mongoose from "mongoose";

const schema = mongoose.Schema({
  Firm_name: {
    type: String,
    required: true,
  },
  GSTIN: {
    type: String,
    required: true,
  },
  PAN: {
    type: String,
    required: [true, "must be of 10 chars"],
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
  createdAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const Firm = mongoose.model("Firm", schema);
