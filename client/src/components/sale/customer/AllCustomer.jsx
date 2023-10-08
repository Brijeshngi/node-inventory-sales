import axios from "axios";
import { useEffect, useState } from "react";

const AllCustomer = () => {
  const [data, setData] = useState([]);
  const getAllCustomer = (e) => {
    axios
      .get("http://localhost:4000/api/v1/customer")
      .then((response) => {
        console.log(response);
        setData(response.json());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllCustomer();
  }, []);
  return (
    <>
      <table></table>
    </>
  );
};

export default AllCustomer;
