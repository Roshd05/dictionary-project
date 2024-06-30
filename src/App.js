import React from "react";
import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary Search</header>

        <main>
          <Dictionary />
        </main>

        <footer>
          This project was coded by{" "}
          <a href="https://github.com/Roshd05" target="_blank">
            Roshni Daryanani{" "}
          </a>
          is{" "}
          <a
            href="https://github.com/Roshd05/dictionary-project"
            target="_blank">
            Open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="https://dictionaryproject-rd.netlify.app" target="_blank">
            Hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
  }
  
