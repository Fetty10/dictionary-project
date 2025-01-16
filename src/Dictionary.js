import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [value, setValue] = useState(props.defaultValue);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function search() {
    let apiKey = "o74291bedbb48f3c3et5a5a6ad40853a";

    // https://www.shecodes.io/learn/apis/dictionary
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${value}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleValueChange(event) {
    setValue(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2>What word do you want to look up?</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter any word"
              onChange={handleValueChange}
              defaultValue={props.defaultValue}
            />
          </form>
          <div className="hint">Examples: Sunset, Book, Love</div>
        </section>
        <Result results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
