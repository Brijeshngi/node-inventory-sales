import axios from "axios";
import { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [type, steType] = useState("");
  const [stockValue, setStockValue] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  const [mfgDate, setMfgDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [packing, setPacking] = useState("");
  const [rate, setRate] = useState("");
  const [CGST, setCGST] = useState("");
  const [SGST, setSGST] = useState("");
  const [discount, setDiscount] = useState("");
  const [Deal, setDeal] = useState("");
  const [net, setNet] = useState("");
  const handleAddProduct = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/api/v1/product", {
      name: name,
      type: type,
      stock_value: stockValue,
      batch_no: batchNumber,
      mfg_date: mfgDate,
      quantity: quantity,
      packing: packing,
      rate: rate,
      CGST: CGST,
      SGST: SGST,
      discount: discount,
      Deal: Deal,
      net: net,
    });
  };
  return (
    <>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Product Name"
        />
        <input
          type="text"
          onChange={(e) => {
            steType(e.target.value);
          }}
          placeholder="Product Type"
        />
        <input
          type="text"
          onChange={(e) => {
            setStockValue(e.target.value);
          }}
          placeholder="Product Stock value"
        />
        <input
          type="text"
          onChange={(e) => {
            setBatchNumber(e.target.value);
          }}
          placeholder="Product Batch number"
        />
        <input
          type="text"
          onChange={(e) => {
            setMfgDate(e.target.value);
          }}
          placeholder="Product MFG"
        />
        <input
          type="text"
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          placeholder="Product Packing"
        />
        <input
          type="text"
          onChange={(e) => {
            setPacking(e.target.value);
          }}
          placeholder="Product Packing"
        />
        <input
          type="text"
          onChange={(e) => {
            setRate(e.target.value);
          }}
          placeholder="Product Rate"
        />
        <input
          type="text"
          onChange={(e) => {
            setCGST(e.target.value);
          }}
          placeholder="Product CGST"
        />
        <input
          type="text"
          onChange={(e) => {
            setSGST(e.target.value);
          }}
          placeholder="Product SGST"
        />
        <input
          type="text"
          onChange={(e) => {
            setDiscount(e.target.value);
          }}
          placeholder="Product Discount"
        />
        <input
          type="text"
          onChange={(e) => {
            setDeal(e.target.value);
          }}
          placeholder="Product Deal"
        />
        <input
          type="text"
          onChange={(e) => {
            setNet(e.target.value);
          }}
          placeholder="Product Net"
        />
        <button>submit</button>
      </form>
    </>
  );
};

export default AddProduct;
