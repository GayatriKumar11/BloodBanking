import React from "react";
import { NavLink } from 'react-router-dom';
import curved from "../DonorPage/curved.png";
import vector from "../DonorPage/vector.png";
import blood from "../DonorPage/blood.png";
import blooddonation from "../DonorPage/blooddonation.jpg";
import Card from 'react-bootstrap/Card';
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
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <img src={blooddonation} id="blooddonation" />
                    <h3>Why should you donate blood ?</h3>
                </div>
            </div>
            <div className="features">
                <h2></h2>
                <div className="feature-body">
                    <div className="image">
                        <img src={vector} alt="vector" />
                    </div>
                    <Card className="bg-danger" id="cardhomepage">
                            <ul class="a">
                                <br></br>

                                <li>Reduce stress</li>
                                <br></br>
                                <li>Improve your emotional well-being</li>
                                <br></br>
                                <li>Benefit your physical health</li>
                                <br></br>
                                <li>Help get rid of negative feelings</li>
                                <br></br>
                                <li>Giving blood reveal potential health problems</li>
                                <br></br>
                                <li>Giving blood may lower risk of suffering a heart attack</li>
                                <br></br>
                                <li>Giving blood can help liver stay healthy</li>
                                <br></br>
                                <li>Giving blood can help your mental state</li>
                                <br></br>
                                <li>Giving blood may reduce your risk of developing cancer</li>
                            </ul>
                    </Card>
                </div>
            </div>
            <div className="tips" id="tips">
                <h2>On the Day of Donation</h2>
                <div className="container">
                    <div className="tips-info">
                        <h4></h4>
                        <hr className="horizontal" />
                        <br></br>
                        <br></br>
   
                        <ul class="b">
                        Drink plenty of fluids and eat at your regular mealtimes.
                        </ul>
                    </div>
                    <div className="tips-info">
                        <h4></h4>
                        <hr className="horizontal" />
                        <br></br>
                        <br></br>
                        <ul class="b">
                        Be prepared to present an official form of identification with a signature, proof of age, and a photo at the time of your donation.
                        </ul>
                    </div>
                    <div className="tips-info">
                        <br></br>
                        <br></br>
                        <br></br>
                        <ul class="b">
                        Make sure that you are registered and have a scheduled appointment with the respective Blood Center.
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