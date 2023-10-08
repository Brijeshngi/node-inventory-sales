import React from "react";
import axios from "axios";
import Card from "./Card";

const Pay = () => {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:4000/api/v1/apikey");
    console.log(key);

    const {
      data: { order },
    } = await axios.post("http://localhost:4000/api/v1/checkout", {
      amount,
    });
    console.log(amount);

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Sarita Aryal",
      description: "Debited",
      image:
        "https://media.licdn.com/dms/image/C5603AQH7uxGhyC3CLw/profile-displayphoto-shrink_800_800/0/1620700833798?e=1689811200&v=beta&t=1m0uByW93D2Rm9z2zITrnipcEzRU8HkSB5BdJwH0W7k ",
      order_id: order.id,
      callback_url: "http://localhost:4000/api/v1/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <>
      <Card amount={45000} checkoutHandler={checkoutHandler} />
      <Card amount={3000} checkoutHandler={checkoutHandler} />
    </>
  );
};

export default Pay;
