import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import AppRouter from './Components/AppRouter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={"https://i.ibb.co/9pdVTpY/5a67a1b701d15068bdfe87c6.png"} className="App-logo" alt="Rilakkuma" />
          <h1 className="App-title">Rilakkuma's Video Store</h1>
        </header>
        <p className="App-intro"> 
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
