import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [value, setValue] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${value}`);
  }

  function handleValueChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter any word"
          autoFocus
          onChange={handleValueChange}
        />
      </form>
    </div>
  );
}
