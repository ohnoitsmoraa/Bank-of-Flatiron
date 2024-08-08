import React from "react";

const Filter = ({ search, setSearch }) => {
  return (
    <div className="search">
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
