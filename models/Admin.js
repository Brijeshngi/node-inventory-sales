import mongoose from "mongoose";
import validator from "validator";

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: validator.isEmail,
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "minimum 8 characters required"],
  },
  contact: {
    type: String,
    required: true,
    minlength: [10, "Required 10 characters only"],
  },
  subscription: {
    subscription_id: String,
    status: String,
  },

  firm: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Firm",
  },

  createdAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const Admin = mongoose.model("Admin", schema);
