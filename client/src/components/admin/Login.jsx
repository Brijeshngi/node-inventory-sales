import axios from "axios";
import { useState } from "react";
import { Logout } from "./Logout";
import { Profile } from "./Profile";
import { ChangePassword } from "./ChangePassword";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/v1/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        setIsLogin(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your email"
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter ypur password"
        />
        <button>Submit</button>
      </form>
      {isLogin ? <Logout /> : "please try again"}
      <Profile />
      <ChangePassword />
    </>
  );
};
