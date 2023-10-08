import axios from "axios";
import { useState } from "react";

const AddCriteria = () => {
  const [criteria, setCriteria] = useState("");
  const handleAddCriteria = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/v1/criteria", {
        name: criteria,
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
      <form onSubmit={handleAddCriteria}>
        <input
          type="text"
          onChange={(e) => {
            setCriteria(e.target.value);
          }}
          placeholder="criteria"
        />
        <button>submit</button>
      </form>
    </>
  );
};

export default AddCriteria;
