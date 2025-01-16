import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photo from "./Photos";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [value, setValue] = useState(props.defaultValue);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleImage(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "o74291bedbb48f3c3et5a5a6ad40853a";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${value}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    let imageApiKey = "o74291bedbb48f3c3et5a5a6ad40853a";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${value}&key=${imageApiKey}`;

    axios.get(imageApiUrl).then(handleImage);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
