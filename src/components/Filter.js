import React from "react";

const Filter = () => {
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by category"
      />
    </div>
  );
};

export default Filter;
