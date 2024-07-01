import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

  
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=840df5b063f365oba39tb282d8c1d0cc`;
  axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordchange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordchange} />
      </form>
      <Results results={results} />
    </div>
  );
  }
