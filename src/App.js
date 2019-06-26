import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Library from './components/Library.js';
// import AppRouter from './Components/AppRouter';

class App extends Component {
  render() {
    return (
       <div className="App">
      <header className="App-header">
       <img src={"https://i.ibb.co/9pdVTpY/5a67a1b701d15068bdfe87c6.png"} className="App-logo" alt="Rilakkuma" />
      <h1 className="App-title">Rilakkuma's Video Store</h1>
       </header>
       <Navbar />
      <div className="App"></div>
      <Library/>
      </div>
    );
  }
}

export default App;
