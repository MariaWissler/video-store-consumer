import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Customer from './components/Customer.js';
import CustomerList from './components/CustomerList.js';
import Search from './components/Search';
import { withRouter } from "react-router";
import MovieList from './components/MovieList.js';
// import { BrowserRouter as Router, Link} from 'react-router-dom';

const customerData = () => (
  <div>
    <CustomerList/>
  </div>
);



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentCustomer: "",
    };
  }

  render() {
    return (
       <div className="App">
      <header className="App-header">
       <img src={"https://i.ibb.co/9pdVTpY/5a67a1b701d15068bdfe87c6.png"} className="App-logo" alt="Rilakkuma" />
      <h1 className="App-title">Rilakkuma's Video Store</h1>
       </header>
       <Navbar />
      
          <div>
            <Route path="/" exact component={MovieList}/>
            <Route path="/customers" component={customerData}/>
            <Route path="/search" component={
              (routerProps) => <Search searchResults={this.state.searchResults} {...routerProps} />
            }/>
          </div>
        </div>
    );
  }
}

export default withRouter(App);
