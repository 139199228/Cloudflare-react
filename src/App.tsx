import React from 'react';
import logo from './logo.svg';
import axios from "axios"
import './App.css';

function App() {
  
  axios.get("/api").then(data=>{
    console.log(data)
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          data
        </a>
      </header>
    </div>
  );
}

export default App;