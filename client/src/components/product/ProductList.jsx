import axios from "axios";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const getList = () => {
    axios
      .get("http://localhost:4000/api/v1/product")
      .then((response) => {
        console.log(response);
        setProductList(response.json());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <>
      <table>
        <th>name</th>
        <th>type</th>
        <th>stock_value</th>
        <th>batch_no</th>
        <th>mfg_date</th>
        <th>quantity</th>
        <th>packing</th>
        <th>rate</th>
        <th>CGST</th>
        <th>SGST,</th>
        <th>discount</th>
        <th>Deal</th>
        <th>net</th>
        {/* {productList.map((data) => {})} */}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </>
  );
};

export default ProductList;
