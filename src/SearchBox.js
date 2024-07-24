import React from "react";

function SearchBox() {
  return (
    <div className="p-2">
      <input
        type="search"
        placeholder="search robots"
        className="bg-blue-300 p-3 border-2 border-green-300 rounded-md"
      />
    </div>
  );
}

export default SearchBox;
