import app from "./app";
import Razorpay from "razorpay";
import { connectMongoDBAtlas } from "./config/database.js";
connectMongoDBAtlas();

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`server working on ${process.env.PORT}`);
});
