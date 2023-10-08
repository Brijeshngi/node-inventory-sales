import axios from "axios";
import { useState } from "react";

export const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const handleResetPassword = (e) => {
    axios
      .put("http://localhost:4000/api/v1/resetpassword/:token", {
        password: newPassword,
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
      <form onSubmit={handleResetPassword}>
        <input
          type="password"
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
          placeholder="enter new password"
        />
        <button>Update</button>
      </form>
    </>
  );
};
