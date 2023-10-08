import axios from "axios";

export const Logout = () => {
  const handleLogout = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:4000/api/v1/logout")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
