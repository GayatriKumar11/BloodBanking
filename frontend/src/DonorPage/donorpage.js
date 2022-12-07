import React from "react";
import { NavLink } from 'react-router-dom';
import curved from "../DonorPage/curved.png";
import vector from "../DonorPage/vector.png";
import blood from "../DonorPage/blood.png"
import './style.css';

export default function Landing() {
    return (
        <>

            <div>
                <nav className="navbar navbar-default navbar-static-top navbar-shrink bg-transparent">
                    <div className="container">
                        <div className="navbar-header page-scroll">

                            <NavLink className="navbar-brand page-scroll" to="/">
                                <span className="title mb-0 h3">
                                    <img src={blood} className="blood-image" alt="Blood" />
                                    Blood In Need
                                </span>
                            </NavLink>
                        </div>

                        <div
                            className="collapse navbar-collapse"
                            id="bs-example-navbar-collapse-1"
                        >
                            
                            <ul className="nav navbar-nav navbar-right">
                                <li className="hidden active">
                                    <NavLink to="#page-top">{""}</NavLink>
                                </li>
                                <li className="">
                                    <NavLink
                                        className="page-scroll"
                                        to="/profile"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            borderBottom: "2px solid #c50f0f",
                                        }}
                                    >
                                      
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="landing">
                <img className="curved" src={curved} alt="curved" />

                <div className="center">
                    <h2>What is Blood?</h2>
                    <h3>Blood is made up of four main components. Red blood cells, platelets, plasma and white blood cells. Each whole blood donation has the potential to save up to three lives. </h3>
                </div>
            </div>
            <div className="features">
                <h2></h2>
                <div className="feature-body">
                    <div className="image">
                        <img src={vector}  alt="vector" />
                    </div>
                    <div className="points">
                        <div className="bullets">
                            <p>
                                <i className="fa fa-location-arrow" aria-hidden="true"></i>
                                Blood is made up of four main components.
                                Red blood cells, platelets, plasma and white blood cells. 
                            </p>
                        </div>
                        <div className="bullets">
                        <p>
                            The reason to donate is simple…it helps save lives. In fact, every two seconds of every day, someone needs blood. Since blood cannot be manufactured outside the body and has a limited shelf life, the supply must constantly be replenished by generous blood donors.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tips" id="tips">
                <h2> </h2>
                <p>
                   
                </p>
                <div className="container">
                    <div className="tips-info">
                        <h4></h4>
                        <hr className="horizontal" />
                        <ul>
                            
                        </ul>
                    </div>
                    <div className="tips-info">
                        <h4></h4>
                        <hr className="horizontal" />
                        <ul>
                          
                        </ul>
                    </div>
                    <div className="tips-info">
                        <h4></h4>
                        <hr className="horizontal" />
                        <ul>
                            
                        </ul>
                    </div>
                </div>
            </div>


            <div>
                <footer class="site-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-6">
                                <h6></h6>
                                <p class="text-justify">
                                    
                                </p>
                            </div>

                            <div class="col-xs-6 col-md-3">
                                
                            </div>

                            <div class="col-xs-6 col-md-3">
                                
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-sm-6 col-xs-12">
                                <p class="copyright-text">
                                    Copyright &copy; {new Date().getFullYear()} 
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </>
    );
}