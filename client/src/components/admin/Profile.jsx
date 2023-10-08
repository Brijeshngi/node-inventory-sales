import axios from "axios";
import { useState } from "react";

export const Profile = () => {
  const [user, setUser] = useState("");
  const handleProfile = () => {
    axios
      .get("http://localhost:4000/api/v1/me")
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {user ? user : "not found"}
      <button onClick={handleProfile}>Profile</button>
      <p></p>
    </>
  );
};
