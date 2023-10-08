import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
    // required: true,
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

  ResetPasswordToken: String,
  ResetPasswordExpire: String,
});

schema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

schema.methods.getJWTToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
};

schema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// for testing on console that generates resetToken

// console.log("password", crypto.randomBytes(20).toString("hex"));

schema.methods.getResetToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.ResetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.ResetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

export const Admin = mongoose.model("Admin", schema);
