import axios from "axios";
import { useState } from "react";

const AddCustomer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [FirmName, setFirmName] = useState("");
  const [customerType, setCustomerType] = useState("");
  const [rewards, setRewards] = useState("");
  const handleAddCustomer = (e) => {
    e.preventDefault();
    axios
      .post("http:localhost:4000/api/v1/customer", {
        name: name,
        email: email,
        contact: contact,
        Firm_name: FirmName,
        customer_type: customerType,
        rewards: rewards,
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
      <form onSubmit={handleAddCustomer}>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.name);
          }}
          placeholder="Customer name"
        />
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.name);
          }}
          placeholder="Customer email"
        />
        <input
          type="text"
          onChange={(e) => {
            setContact(e.target.name);
          }}
          placeholder="Customer contact"
        />
        <input
          type="text"
          onChange={(e) => {
            setFirmName(e.target.name);
          }}
          placeholder="Customer firm name"
        />
        <input
          type="text"
          onChange={(e) => {
            setCustomerType(e.target.name);
          }}
          placeholder="Customer type"
        />
        <input
          type="text"
          onChange={(e) => {
            setRewards(e.target.name);
          }}
          placeholder="Customer rewards"
        />
        <button>submit</button>
      </form>
    </>
  );
};

export default AddCustomer;
