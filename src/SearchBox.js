import React, { useState } from "react";

function SearchBox() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div className="p-2">
      <form>
        <input
          type="search"
          placeholder="search robots"
          className="bg-blue-300 p-3 border-2 border-green-300 rounded-md"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBox;
