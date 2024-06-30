import React, { useState } from "react";
import axios from "axios";


export default function Dictionary() {
  let [keyWord, setKeyword] = useState("");

  function handleResponse(response) {
    console.log.apply(response);
  }

  function search(event) {
    event.preventDefault();

  let apiKey = "840df5b063f365oba39tb282d8c1d0cc";
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=sunset&key=840df5b063f365oba39tb282d8c1d0cc`;
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
     
    </div>
  );
  }
