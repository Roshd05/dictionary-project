import React, { useState } from "react";

export default function Dictionary() {
  let [keyWord, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyWord} definition`);
  }

  function handleKeywordchange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" placeholder="Enter-text"  onChange={handleKeywordchange} />
        <input type="button" className="btn btn-primary">
          Search
        </input>
      </form>
    </div>
  );
}
