import axios from "axios";
import { useState } from "react";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(name, email, password);
  const registerAdmin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/v1/register", {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };
  return (
    <>
      <h1>Register Here</h1>
      <form onSubmit={registerAdmin}>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter your name here"
        />
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your email here"
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter your password here"
        />
        <button>Submit</button>
      </form>
    </>
  );
};
