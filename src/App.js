import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Customer from './components/Customer.js';
import CustomerList from './components/CustomerList.js';
import Search from './components/Search';
import Library from './components/Library.js';
// import { BrowserRouter as Router, Link} from 'react-router-dom';

const customerData = () => (
  <div>
    <CustomerList/>
  </div>
);



class App extends Component {
  render() {
    return (
       <div className="App">
      <header className="App-header">
       <img src={"https://i.ibb.co/9pdVTpY/5a67a1b701d15068bdfe87c6.png"} className="App-logo" alt="Rilakkuma" />
      <h1 className="App-title">Rilakkuma's Video Store</h1>
       </header>
       <Navbar />
      
          <div>
            <Route path="/" exact component={Library}/>
            <Route path="/customers" component={customerData}/>
            <Route path="/search" component={Search}/>
          </div>
        </div>
    );
  }
}

export default App;
