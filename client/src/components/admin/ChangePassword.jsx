import axios from "axios";
import { useState } from "react";

export const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const handlePassword = () => {
    axios
      .put("http://localhost:4000/api/v1/changepassword", {
        oldPassword: oldPassword,
        newPassword: newPassword,
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
      <form onSubmit={handlePassword}>
        <input
          type="password"
          onChange={(e) => {
            setOldPassword(e.target.value);
          }}
          placeholder="Enter your Old Password"
        />
        <input
          type="password"
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
          placeholder="Enter your New Password"
        />
        <button>Submit</button>
      </form>
    </>
  );
};
