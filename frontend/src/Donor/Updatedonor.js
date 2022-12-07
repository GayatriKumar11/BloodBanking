import React from "react";
import { renderMatches, useNavigate, } from 'react-router-dom'
import { useState } from "react";
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import image from '../Hospital/Blue.png';
import Donor from '../Donor/Donor'
import Adddonor from "../Hospital/Adddonor";
import Drive from '../Drive/Drive'


function Updatedonor() {

    const [phonenumber, setphonenumber] = useState("");
    const [password, setpassword] = useState("");
    let [phonenumberError, setphonenumberError] = useState("");
    let [passwordError, setpasswordError] = useState("");
    let [email, setemail] = useState("");
    let [MessageError, setMessageError] = useState("");

    
    const updatephonenumber = (email) => {
  
        if (phonenumber === "") {
            setphonenumberError("update cannot be done until phoinenumber is filled");
            return true;
        }
        else {
            console.log("clearing updating");
            setphonenumberError("")
            Axios.put('http://localhost:8080/user/editphonenumber', { phonenumber: phonenumber, email: email }).then(
                (response) => {
                    if (response.statusText === "OK") {
                        setMessageError("Fields updated successfully")

                    }

                }
            );

        };

    }

    const updatepassword = (email) => {
  
        if (password === "") {
            setpasswordError("update cannot be done until password is filled");
            return true;
        }
        else {
            console.log("clearing updating");
            setpasswordError("")
            Axios.put('http://localhost:8080/user/editpassword', { password: password, email: email }).then(
                (response) => {
                    if (response.statusText === "OK") {
                        setMessageError("Fields updated successfully")

                    }

                }
            );

        };

    }
    // const myStyle = {
    //   backgroundImage: "url('https://img.freepik.com/free-photo/close-up-students-standing-hands-making-fist-bump-gesture_1150-4512.jpg?w=1060&t=st=1670188203~exp=1670188803~hmac=1b0d618ac0c765bf66307a075ce44e6ee77e2bb04e4949937b5be6d13bcb313a')",
    //   backgroundSize: 'cover',
    //   backgroundRepeat: 'no-repeat',
    //   width: '100%',
    //   height: 'auto',
    //   marginright: '50px'
    // };
    return (
        <>

            <Navbar id="navbar" bg="dark">
                <Container>
                    <Navbar.Brand class="nav1">
                        <Link to='/' class="nav1">Hospital</Link> {"   "}
                        <Link to="/donor" class="nav1">Donor info</Link>{"   "}
                        <Link to="/drive" class="nav1">Drive info</Link>{"   "}
                        <Link to="/adddrive" class="nav1">Drive Admin</Link>{"   "}
                        <Link to="/bloodbank" class="nav1">Blood Bank</Link>{"   "}
                        <Link to="/donorpage" class="nav1">Donor UI</Link>{"   "}
                        <Link to="/viewappointment" class="nav1">View Appointments</Link>{"   "}
                        <Link to="/updateDonor" class="nav1">View Appointments</Link>{"   "}
                    </Navbar.Brand>
                </Container>
            </Navbar>

            <div>
                <Card className="bg-warning text-black" id="adddrive">
                    <div className="App1">
                        <div className="information1">
                            <h1>Update Donor Info</h1>
                            <label> Email:</label>
                            <input id="input"
                                type="text" value={email}
                                onChange={(event) => {
                                    setemail(event.target.value);
                                }}
                            />
                            <br></br>
                            <label> Password:</label>
                            <input id="input"
                                type="text" value={password}
                                onChange={(event) => {
                                    setpassword(event.target.value);
                                }}
                            />
                            <br></br>
                            <div style={{ fontSize: 15, color: "red" }}>{passwordError ? <p>{passwordError}</p> : null}</div>
                            <button id="updatebutton"
                                onClick={() => {
                                    updatepassword(email);
                                }}
                            >
                                {" "}
                                Update Password
                            </button>

                            {/* <div style={{ fontSize: 15, color: "red" }}>{nameError ? <p>{nameError}</p> : null}</div> */}
                            <label>PhoneNumber:</label>
                            <input
                                type="text" id="input" value={phonenumber}
                                onChange={(event) => {
                                    setphonenumber(event.target.value);
                                }}
                            />
                            <br></br>
                            <div style={{ fontSize: 15, color: "red" }}>{phonenumberError ? <p>{phonenumberError}</p> : null}</div>
                            <button id="updatebutton"
                                onClick={() => {
                                    updatephonenumber(email);
                                }}
                            >
                                {" "}
                                Update PhoneNumber
                            </button>

                            {/* <div style={{ fontSize: 15, color: "red" }}>{addressError ? <p>{addressError}</p> : null}</div> */}
                            <div style={{ fontSize: 15, color: "red" }}>{MessageError ? <p>{MessageError}</p> : null}</div>
                            <br></br>

                        </div>
                    </div>

                </Card>
            </div>
        </>


    )


}


export default Updatedonor
