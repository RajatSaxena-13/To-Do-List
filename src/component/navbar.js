import React, { Component } from 'react'
import '../component css/navbar.css'
import { Link } from 'react-router-dom';
import Searchbar from './searchbar';
import Footer from './footer';

export default class Navbar extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='container bg-dark'>
                <div className='row'>
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            <a className="navbar-brand fs-3 text-success" href="#">To-Do-List</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to = "/dailyroutine"><a className="nav-link active fs-5 fw-bold text-warning " aria-current="page" href="#">Daily-Routine</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to = "/weekened"><a className="nav-link fs-5 fw-bold text-warning" href="#">Weekened-Routine</a></Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <a className="nav-link fs-5 fw-bold text-warning">Disabled</a>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <i className='fa fa-facebook mx-3 fs-4 text-primary'></i>
                                    <i className='fa fa-instagram mx-3 fs-4 text-danger'></i>
                                    <i className='fa fa-twitter mx-3 fs-4 text-primary '></i>
                                    <i className='fa fa-youtube mx-3 fs-4 text-danger'></i>
                                    {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button> */}
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            
        )
    }
}
