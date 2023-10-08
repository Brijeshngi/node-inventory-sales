import axios from "axios";
import { useState } from "react";

export const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const handleForgetPassword = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/v1/forgetpassword", {
        email: email,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <form onSubmit={handleForgetPassword}>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your Email here"
        />
        <button>Submit</button>
      </form>
    </>
  );
};
