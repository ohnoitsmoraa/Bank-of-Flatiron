import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    id: "",
    date: "",
    description: "",
    category: "",
    amount: "",
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  console.log(formData);
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="number"
          name="id"
          placeholder="Enter ID Number"
          value={formData.id}
          onChange={handleOnChange}
        />
        <input
          type="date"
          name="date"
          placeholder="Enter Date"
          value={formData.date}
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Enter Description"
          value={formData.description}
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Enter Category"
          value={formData.category}
          onChange={handleOnChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Enter Amount"
          value={formData.amount}
          onChange={handleOnChange}
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default Form;
