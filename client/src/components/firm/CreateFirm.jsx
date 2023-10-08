import axios from "axios";
import { useState } from "react";

export const CreateFirm = () => {
  const [firmName, setFirmName] = useState("");
  const [GSTIN, setGSTIN] = useState("");
  const [PAN, setPAN] = useState("");
  const [DL, setDL] = useState("");
  const [foodLicense, setFoodLicense] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [PIN, setPIN] = useState("");
  const handleCreateFirm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/v1/firm", {
        Firm_name: firmName,
        GSTIN: GSTIN,
        PAN: PAN,
        DL: DL,
        Food_License: foodLicense,
        address: address,
        city: city,
        state: state,
        PIN: PIN,
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
      <form onSubmit={handleCreateFirm}>
        <input
          type="text"
          onChange={(e) => {
            setFirmName(e.target.value);
          }}
          placeholder="Firm name"
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
            setPAN(e.target.value);
          }}
          placeholder="PAN"
        />
        <input
          type="text"
          onChange={(e) => {
            setDL(e.target.value);
          }}
          placeholder="DL"
        />
        <input
          type="text"
          onChange={(e) => {
            setFoodLicense(e.target.value);
          }}
          placeholder="Food_License"
        />
        <input
          type="text"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          placeholder="Address"
        />
        <input
          type="text"
          onChange={(e) => {
            setCity(e.target.value);
          }}
          placeholder="City"
        />
        <input
          type="text"
          onChange={(e) => {
            setState(e.target.value);
          }}
          placeholder="State"
        />
        <input
          type="text"
          onChange={(e) => {
            setPIN(e.target.value);
          }}
          placeholder="PIN"
        />
        <button>submit</button>
      </form>
    </>
  );
};
