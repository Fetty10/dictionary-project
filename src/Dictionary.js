import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [value, setValue] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "o74291bedbb48f3c3et5a5a6ad40853a";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${value}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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
