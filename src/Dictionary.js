import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("Awesome");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation:https://dictionaryapi.dev
    let apiKey = `840df5b063f365oba39tb282d8c1d0cc`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "bgKpPq39LCUXKpLoyX4JZAc3PjRDYhGpVxMMJxVO9H6dCc8UUFwTZXd5";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    let headers = { Authorization: `${pexelsApiKey}` };

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>Search for Anything you Want!</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleWordChange}
              placeholder="Search for a word..."
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </form>
        </section>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
