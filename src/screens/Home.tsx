import React from "react";
import logo from '../logo.svg';
import '../App.css';

export default function Home() {
    return (
        
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Need to edit
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello World
          </a>
        </header>
      </div>
    )
}