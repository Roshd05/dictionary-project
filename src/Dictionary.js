import React, { useState } from "react";

export default function Dictionary() {
   let [keyWord, setKeyword] = useState("");

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
        <input type="search" onChange={handleKeywordchange} />

      </form>
    </div>
  );
}
