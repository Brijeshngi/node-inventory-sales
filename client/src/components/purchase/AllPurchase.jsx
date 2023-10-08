import axios from "axios";
import { useEffect, useState } from "react";

export const AllPurchase = () => {
  const [data, setData] = useState([]);
  const handleAllPurchase = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:4000/api/v1/allpurchase")
      .then((response) => {
        console.log(response.json());
        setData(response.json());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // reduce
  // sort onClick
  // pagination
  // bydate
  // customdate
  useEffect(() => {
    handleAllPurchase();
  }, []);
  return (
    <>
      <table>
        <tr>
          <th>S.No.</th>
          <th>Bill Number</th>
          <th>Bill Date</th>
          <th>Firm Name</th>
          <th>GSTIN</th>
          <th>Invoice Value</th>
          <th>Taxable Value</th>
          <th>SGST</th>
          <th>CGST</th>
        </tr>
        <tr>
          <td>{}</td>
          {/* {data.length > 0 ? data.map((jsonData) =>{< td > {jsonData}</td>})} */}
          {/* {data.length > 0 ? data.map((jsonData) =>{< td > {jsonData}</td>})} data by day*/}
          {/* {data.length > 0 ? data.map((jsonData) =>{< td > {jsonData}</td>})} data by month*/}
          {/* {data.length > 0 ? data.map((jsonData) =>{< td > {jsonData}</td>})} data by quarterly*/}
          {/* {data.length > 0 ? data.map((jsonData) =>{< td > {jsonData}</td>})} data by year*/}
        </tr>
      </table>
    </>
  );
};
