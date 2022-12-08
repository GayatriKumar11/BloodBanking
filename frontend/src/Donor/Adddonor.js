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
import Adddrive from "../Drive/Adddrive";
import Drive from '../Drive/Drive'




function Adddonor() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [bloodgroup, setbloodgroup] = useState("");
    const [phonenumber, setphonenumber] = useState("");
    let [nameError, setnameError] = useState("");
    let [emailError, setemailError] = useState("");
    let [passwordError, setpasswordError] = useState("");
    let [bloodgroupError, setbloodgroupError] = useState("");
    let [phonenumberError, setphonenumberError] = useState("");
    let [MessageError, setMessageError] = useState("");

    let validate = () => {

        if (name === "" && email === "" && password === "" && bloodgroup === "" && phonenumber === "") {

            setnameError(" name can't be blank");
            setemailError("email can't be blank");
            setpasswordError("password can't be blank");
            setbloodgroupError("bloodgroup cannot be blank");
            setphonenumberError("phonenumber cannot be blank");
            setMessageError(" ");
            return true;
        }
        else {
            setnameError("");
            setemailError("");
            setpasswordError("");
            setbloodgroupError("");
            setphonenumberError("");
          

        }

        if (name === "" && email === "" && password === "" && bloodgroup === "") {
            setnameError("name can't be blank");
            setemailError("email can't be blank");
            setpasswordError("password can't be blank");
            setbloodgroupError("bloodgroup cannot be blank");
            console.log("hello");

        }
        else {
            setnameError("");
            setemailError("");
            setpasswordError("");
            setbloodgroupError("");

            if (name === "" && email === "" && password === "" && phonenumber === "") {
                setnameError("name can't be blank");
                setemailError("email can't be blank");
                setpasswordError("password cannot be blank");
                setphonenumberError("Phonenumber cannot be blank");
                return true;

            }
            else {
                setnameError("");
                setemailError("");
                setpasswordError("");
                setphonenumberError("");

                if (name === "" && email === "" && bloodgroup === "" && phonenumber === "") {

                    setnameError("name can't be blank");
                    setemailError("email can't be blank");
                    setbloodgroupError("bloodgroup cannot be blank");
                    setphonenumberError("Phonenumber cannot be blank");
                    return true;
                }
                else {
                    setnameError("");
                    setemailError("");
                    setbloodgroupError("");
                    setphonenumberError("");

                    if (name === "" && password === "" && bloodgroup === "" && phonenumber === "") {

                        setnameError("name can't be blank");
                        setpasswordError("password cannott be blank");
                        setbloodgroupError("bloodgroup cannot be blank");
                        setphonenumberError("phonenumber cannot be blank");
                        return true;
                    }
                    else {
                        setnameError("");
                        setpasswordError("");
                        setbloodgroupError("");
                        setphonenumberError("");

                        if (email === "" && password === "" && bloodgroup === "" && phonenumber === "") {

                            setemailError("email cannot be blank");
                            setpasswordError("password can't be blank");
                            setbloodgroupError("bloodgroup can't be blank");
                            setphonenumberError("phonenumber can't be blank");
                            return true;


                        }
                        else {
                            setemailError("");
                            setpasswordError("");
                            setbloodgroupError("");
                            setphonenumberError("");

                        }

                    }
                }

            }
        }

        if (bloodbankname === "" && address === "" && bloodgroup === "") { //1
            setbloodbanknameError("bloodbankname can't be empty")
            setaddressError("address can't be empty")
            setbloodgroupError("bloodgroup can't be empty")
            return true;

        }
        else {
            setbloodbanknameError("")
            setaddressError("")
            setbloodgroupError("")
            if (bloodbankname === "" && address === "" && zipcode === "") { //2
                setbloodbanknameError("bloodbankname can't be empty")
                setaddressError("address can't be empty")
                setzipcodeError("zipcode can't be empty")
                return true;
            }
            else {
                setbloodbanknameError("")
                setaddressError("")
                setzipcodeError("")
                if (bloodbankname === "" && address == "" && quantity == "") { //3
                    setbloodbanknameError(" bloodbankname can't be empty")
                    setaddressError("address can't be empty")
                    setquantityError("quantity can't be empty")
                    return true;
                }
                else {
                    setbloodbanknameError(" ")
                    setaddressError("")
                    setquantityError("")
                    if (address === "" && zipcode === "" && bloodgroup === "") { //4
                        setbloodgroupError("bloodgroup can't be empty")
                        setaddressError("address can't be empty")
                        setzipcodeError("zipcode can't be empty")
                        return true;
                    }
                    else {
                        setbloodgroupError("")
                        setaddressError("")
                        setzipcodeError("")
                        if (address === "" && zipcode === "" && quantity === "") { //5
                            setquantityError("quantity can't be empty")
                            setaddressError("address can't be empty")
                            setzipcodeError("zipcode can't be empty")
                            return true;
                        }
                        else {
                            setquantityError("")
                            setaddressError("")
                            setzipcodeError("")
                            if (bloodbankname == " " && zipcode == "" && quantity == "") { //6
                                setbloodbanknameError("bloodbank name can't be empty")
                                setbloodgroupError("blood group can't be empty")
                                setzipcodeError("zipcode can't be empty")
                                return true;
                            }
                            else {
                                setbloodbanknameError("")
                                setbloodgroupError("")
                                setzipcodeError("")
                                if (bloodbankname === "" && bloodgroup === "" && quantity == "") { //7
                                    setbloodbanknameError("bloodbank name can't be empty")
                                    setbloodgroupError("bloodgroup can't be empty")
                                    setquantityError("quantity can't be empty")
                                    return true;
                                }
                                else {
                                    setbloodbanknameError("")
                                    setbloodgroupError("")
                                    setquantityError("")
                                    if (bloodbankname == "" && bloodgroup == "" && zipcode === "") { //8
                                        setbloodbanknameError("bloodbank name can't be empty")
                                        setbloodgroupError("blood group can't be empty")
                                        setzipcodeError("zipcode can't be empty")
                                        return true;
                                    }
                                    else {
                                        setbloodgroupError("")
                                        setbloodbanknameError("")
                                        setzipcodeError("")
                                        if (zipcode === "" && bloodgroup === "" && quantity === "") { //9
                                            setbloodgroupError("blood group can't be empty")
                                            setquantityError("quantity can't be empty")
                                            setzipcodeError("zipcode can't be empty")
                                            return true;
                                        }
                                        else {
                                            setbloodgroupError("")
                                            setquantityError("")
                                            setzipcodeError("")
                                            if (address == "" && zipcode === " " && bloodgroup === "") { //10

                                                setbloodgroupError("blood group can't be empty")
                                                setaddressError("address can't be empty")
                                                setzipcodeError("zipcode can't be empty")
                                                return true;

                                            }
                                            else {

                                                setbloodgroupError("")
                                                setaddressError("")
                                                setzipcodeError("")

                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        if (bloodbankname === "" && address === "") {
            setbloodbanknameError("Hospital Name can't be empty")
            setaddressError("Address can't be empty")
            return true;
        }
        else {
            setbloodbanknameError(" ")
            setaddressError(" ")
            if (bloodbankname === "" && zipcode === "") {
                setbloodbanknameError("Hospital Name can't be empty")
                setzipcodeError("zipcode can't be empty")
                return true;
            }
            else {
                setbloodbanknameError("")
                setzipcodeError("")
                if (bloodbankname === "" && bloodgroup === "") {
                    setbloodbanknameError("blood bank name can't be empty")
                    setbloodgroupError("bloodgroup can't be empty")
                    return true;
                }
                else {
                    setbloodbanknameError(" ")
                    setbloodgroupError(" ")
                    if (bloodbankname === "" && quantity === "") {
                        setbloodbanknameError("blood bank name can't be empty")
                        setquantity("quantity can't be empty")
                        return true;
                    }
                    else {
                        if (address === "" && zipcode === "") {
                            setaddressError("address can't be empty")
                            setzipcodeError("zipcode can't be empty")
                            return true;
                        }
                        else {
                            setaddressError("")
                            setzipcodeError("")
                            if (address === "" && bloodgroup === "") {
                                setaddressError("address can't be empty")
                                setbloodgroupError("bloodgroup can't be empty")
                                return true;
                            }
                            else {
                                setaddressError("")
                                setbloodgroupError("")
                                if (address == "" && quantity == "") {
                                    setaddressError("address can't be empty")
                                    setquantityError("quantity can't be empty")
                                    return true;
                                }
                                else {
                                    setaddressError("")
                                    setquantityError("")
                                    if (zipcode == "" && bloodgroup == "") {
                                        setzipcodeError("zipcode can't be empty")
                                        setbloodgroupError("bloodgroup can't be empty")
                                        return true;
                                    }
                                    else {
                                        setzipcodeError("")
                                        setbloodgroupError("")
                                        if (zipcode == "" && quantity == "") {
                                            setzipcodeError("zipcode can't be empty")
                                            setquantityError("quantity can't be empty")
                                            return true;
                                        }
                                        else {
                                            setzipcodeError("")
                                            setquantityError("")
                                            if (bloodgroup == "" && quantity == "") {
                                                setbloodgroupError("bloodgroup can't be empty")
                                                setquantityError("quantity can't be empty")
                                                return true;

                                            }
                                            else {
                                                setbloodgroupError("")
                                                setquantityError("")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (address === "") {
                    setaddressError("Address cannot be blank");
                    return true;
                }
                else {

                    setaddressError(" ")
                }
                if (bloodbankname === "") {
                    setbloodbanknameError("bloodbank name cannot be blank");
                    return true;
                }
                else {
                    setbloodbanknameError(" ")
                }
                if (bloodgroup === "") {
                    setbloodgroupError("bloodgroup cannot be blank")
                    return true;
                }
                else {
                    setbloodgroupError("")
                }
                if (zipcode === "") {
                    setzipcodeError("zipcode cannot be blank");
                    return true;
                }
                else {
                    setzipcodeError(" ")
                }
                var zipregex = /(^\d{5}$)|(^\d{5}-\d{4}$)/
                if (!zipregex.test(zipcode)) {
                    console.log('error testing')
                    setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
                    return true;
                }
                setzipcodeError(" ")
                if (quantity === "") {
                    setquantityError("quantity cannot be blank");
                    return true;

                }
                else {

                    setquantityError("");
                    var quantityregex = /^ [0-9]*$/;
                    if (!quantityregex.test(quantity)) {
                        setquantityError("quantity must be in numbers");
                        return true;
                    }
                    setquantityError("")
                }




            }

        }

    }



    var Adding = (e) => {

        try {
            if (!validate()) {
                e.preventDefault();
                setname("");
                setemail("");
                setpassword("");
                setbloodgroup("");
                setphonenumber("");
                console.log('adding donor')
                addDonor();
            }
        }
        catch (err) {
            console.log(err);
        }
    };



    const myStyle = {
        backgroundImage: "url('https://partheniumprojects.com/wp-content/uploads/2018/12/Blood-Bank-1.jpg')",
        backgroundSize: '100%',
        backgroundRepeat: 'repeat',
        width: '100%',
        height: '100%',
        marginright: '100px'
    };
    return (
        <>

            <Navbar id="navbar" bg="dark">
                <Container>
                    <Navbar.Brand class="nav1">
                        <Link to='/' class="nav1">Hospital Inventory</Link> {"   "}
                        <Link to="/donor" class="nav1">Donor information</Link>{"   "}
                        <Link to="/drive" class="nav1">Drive information</Link>{"   "}
                        <Link to="/adddrive" class="nav1">Drive Inventory</Link>{"   "}
                        <Link to="/bloodbank" class="nav1">BloodBank Inventory</Link>{"   "}
                        <Link to="/donorpage" class="nav1">Donor UI</Link>{"   "}
                        <Link to="/viewappointment" class="nav1">View Appointments</Link>{"   "}

                    </Navbar.Brand>
                </Container>
            </Navbar>

            <div style={myStyle}>
                <Card className="bg-danger" id="adddonor">
                    <div className="App">
                        <div className="information">
                            <h1>Donor Form</h1>
                            <br></br>
                            <br></br>
                            <label id="label">Name:</label>
                            <input id="input"
                                type="text" value={name}
                                onChange={(event) => {
                                    setname(event.target.value);
                                }}
                            />
                            <div style={{ fontSize: 17, color: "white" }}>{nameError ? <p>{nameError}</p> : null}</div>

                            <label id="label">Email:</label>
                            <input
                                type="text" id="input" value={email}
                                onChange={(event) => {
                                    setemail(event.target.value);
                                }}
                            />
                            <div style={{ fontSize: 17, color: "white" }}>{emailError ? <p>{emailError}</p> : null}</div>
                            <label id="label">Password:</label>
                            <input
                                type="text" id="input" value={password}
                                onChange={(event) => {
                                    setpassword(event.target.value);
                                }}
                            />
                            <div style={{ fontSize: 17, color: "white" }}>{passwordError ? <p>{passwordError}</p> : null}</div>

                            <label id="label">Bloodgroup:</label>
                            <input
                                type="text" id="input" value={bloodgroup}
                                onChange={(event) => {
                                    setbloodgroup(event.target.value);
                                }}
                            />
                            <div style={{ fontSize: 17, color: "white" }}>{bloodgroupError ? <p>{bloodgroupError}</p> : null}</div>
                            <label id="label">Phonenumber:</label>
                            <input
                                type="text" id="input" value={phonenumber}
                                onChange={(event) => {
                                    setphonenumber(event.target.value);
                                }}
                            />
                            <br></br>
                            <div style={{ fontSize: 17, color: "white" }}>{phonenumberError ? <p>{phonenumberError}</p> : null}</div>
                            <button id="button" onClick={Adding}>Add Inventory</button>
                        </div>
                      
                    </div>

                </Card>
            </div>
        </>


    )





}
export default Adddonor
