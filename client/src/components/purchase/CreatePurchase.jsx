import axios from "axios";
import { useState } from "react";

const CreatePurchase = () => {
  const [billNumber, setBillNumber] = useState("");
  const [billDate, setBillDate] = useState("");
  const [firmName, setFirmName] = useState("");
  const [GSTIN, setGSTIN] = useState("");
  const [InvoiceValue, setInvoiceValue] = useState("");
  const [taxableValue, setTaxableValue] = useState("");
  const [CGST, setCGST] = useState("");
  const [SGST, setSGST] = useState("");
  const handleCreatePurchase = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:4000/api/v1/purchase", {
        bill_number: billNumber,
        bill_date: billDate,
        firm_name: firmName,
        GSTIN: GSTIN,
        invoice_value: InvoiceValue,
        taxable_value: taxableValue,
        CGST: CGST,
        SGST: SGST,
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
      <form onSubmit={handleCreatePurchase}>
        <input
          type="text"
          onChange={(e) => {
            setBillNumber(e.target.value);
          }}
          placeholder="bill number"
        />
        <input
          type="Date"
          onChange={(e) => {
            setBillDate(e.target.value);
          }}
          placeholder="bill date"
        />
        <input
          type="text"
          onChange={(e) => {
            setFirmName(e.target.value);
          }}
          placeholder="firm name"
        />
        <input
          type="text"
          onChange={(e) => {
            setGSTIN(e.target.value);
          }}
          placeholder="GSTIN"
        />
        <input
          type="text"
          onChange={(e) => {
            setInvoiceValue(e.target.value);
          }}
          placeholder="invoice value"
        />
        <input
          type="text"
          onChange={(e) => {
            setTaxableValue(e.target.value);
          }}
          placeholder="taxable value"
        />
        <input
          type="text"
          onChange={(e) => {
            setCGST(e.target.value);
          }}
          placeholder="CGST"
        />
        <input
          type="text"
          onChange={(e) => {
            setSGST(e.target.value);
          }}
          placeholder="SGST"
        />
        <button>submit</button>
      </form>
    </>
  );
};

export default CreatePurchase;
