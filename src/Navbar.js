import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-nav nav-fill justify-content-between" id="navbarSupportedContent">
                    <div className="nav-item">
                        <Link to="/customers" className="nav-link btn btn-outline-primary">customers<span class="sr-only">(current)</span></Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/" className="nav-link btn btn-outline-primary">rental library</Link>
                    </div>
                    <div className="nav-item">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="enter movie title" aria-label="Search"></input>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">search</button>
                        </form>
                    </div>
                    <div className="nav-item">
                        <div>current customer: {this.props.customer}</div>
                    </div>
                    <div className="nav-item">
                        <div>current movie: {this.props.movie}</div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar