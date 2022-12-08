import React from "react";
import { renderMatches, useNavigate, } from 'react-router-dom'
import { useState } from "react";
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import image from '../Hospital/Blue.png';
import Donor from '../DonorInfo/Donor'
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
    var emailregex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    var passwordregex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$/;

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

        if (name === "" && email === "" && bloodgroup === "") { //1
            setnameError("name can't be empty")
            setemailError("email can't be empty")
            setbloodgroupError("bloodgroup can't be empty")
            return true;

        }
        else {
            setnameError("")
            setemailError("")
            setbloodgroupError("")
            if (name === "" && email === "" && password === "") { //2
                setnameError("name can't be empty")
                setemailError("email can't be empty")
                setpasswordError("password can't be empty")
                return true;
            }
            else {
                setnameError("")
                setemailError("")
                setpasswordError("")
                if (name === "" && email == "" && phonenumber == "") { //3
                    setnameError("name can't be empty")
                    setemailError("email can't be empty")
                    setphonenumberError("phonenumber can't be empty")
                    return true;
                }
                else {
                    setnameError("")
                    setemailError("")
                    setphonenumberError("")
                    if (email === "" && password === "" && bloodgroup === "") { //4
                        setbloodgroupError("bloodgroup can't be empty")
                        setemailError("email can't be empty")
                        setpasswordError("password can't be empty")
                        return true;
                    }
                    else {
                        setbloodgroupError("")
                        setemailError("")
                        setpasswordError("")
                        if (email === "" && password === "" && phonenumber === "") { //5
                            setemailError("email can't be empty")
                            setpasswordError("password can't be empty")
                            setphonenumberError("phonenumber can't be empty")
                            return true;
                        }
                        else {
                            setemailError("")
                            setpasswordError("")
                            setphonenumberError("")
                            if (name == " " && password == "" && phonenumber == "") { //6
                                setnameError("name can't be empty")
                                setpasswordError("password can't be empty")
                                setphonenumberError("phonenumber can't be empty")
                                return true;
                            }
                            else {
                                setnameError("")
                                setpasswordError("")
                                setphonenumberError("")
                                if (name === "" && bloodgroup === "" && phonenumber == "") { //7
                                    setnameError("name can't be empty")
                                    setbloodgroupError("bloodgroup can't be empty")
                                    setphonenumberError("phonenumber can't be empty")
                                    return true;
                                }
                                else {
                                    setnameError("")
                                    setbloodgroupError("")
                                    setphonenumberError("")
                                    if (name == "" && bloodgroup == "" && password === "") { //8
                                        setnameError("name can't be empty")
                                        setbloodgroupError("bloodgroup can't be empty")
                                        setpasswordError("password can't be empty")
                                        return true;
                                    }
                                    else {
                                        setnameError("")
                                        setbloodgroupError("")
                                        setpasswordError("")
                                        if (password === "" && bloodgroup === "" && phonenumber === "") { //9
                                            setbloodgroupError("blood group can't be empty")
                                            setpasswordError("password can't be empty")
                                            setphonenumberError("phonenumber can't be empty")
                                            return true;
                                        }
                                        else {
                                            setbloodgroupError("")
                                            setpasswordError("")
                                            setphonenumberError("")
                                            if (email == "" && password === " " && bloodgroup === "") { //10

                                                setemailError("email can't be empty")
                                                setpasswordError("password can't be empty")
                                                setbloodgroupError("bloodgroup can't be empty")
                                                return true;

                                            }
                                            else {


                                                setemailError("")
                                                setpasswordError("")
                                                setbloodgroupError("")

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

        if (name === "" && email === "") {
            setnameError("Name can't be empty")
            setemailError("email can't be empty")
            return true;
        }
        else {
            setnameError("")
            setemailError("")
            if (name === "" && password === "") {
                setnameError("Name can't be empty")
                setpasswordError("password can't be empty")
                return true;
            }
            else {
                setnameError("")
                setpasswordError("")
                if (name === "" && bloodgroup === "") {
                    setnameError("name can't be empty")
                    setbloodgroupError("bloodgroup can't be empty")
                    return true;
                }
                else {
                    setnameError("")
                    setbloodgroupError("")
                    if (name === "" && phonenumber === "") {
                        setnameError("name can't be empty")
                        setphonenumberError("phonenumber can't be empty")
                        return true;
                    }
                    else {
                        if (email === "" && password === "") {
                            setemailError("email can't be empty")
                            setpasswordError("password can't be empty")
                            return true;
                        }
                        else {
                            setemailError("")
                            setpasswordError("")
                            if (email === "" && bloodgroup === "") {
                                setemailError("email can't be empty")
                                setbloodgroupError("bloodgroup can't be empty")
                                return true;
                            }
                            else {
                                setemailError("")
                                setbloodgroupError("")
                                if (email == "" && phonenumber == "") {
                                    setemailError("email can't be empty")
                                    setphonenumberError("phonenumber can't be empty")
                                    return true;
                                }
                                else {
                                    setemailError("")
                                    setphonenumberError("")
                                    if (password == "" && bloodgroup == "") {
                                        setpasswordError("password can't be empty")
                                        setbloodgroupError("bloodgroup can't be empty")
                                        return true;
                                    }
                                    else {
                                        setpasswordError("")
                                        setbloodgroupError("")
                                        if (password == "" && phonenumber == "") {
                                            setpasswordError("password can't be empty")
                                            setphonenumberError("phonenumber can't be empty")
                                            return true;
                                        }
                                        else {
                                            setpasswordError("")
                                            setphonenumberError("")
                                            if (bloodgroup == "" && phonenumber == "") {
                                                setbloodgroupError("bloodgroup can't be empty")
                                                setphonenumberError("phonenumber can't be empty")
                                                return true;

                                            }
                                            else {
                                                setbloodgroupError("")
                                                setphonenumberError("")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (email === "") {
                    setemailError("email cannot be blank");
                    return true;
                }
                else {

                    setemailError(" ")
                    if (!emailregex.test(email)) {
                        setemailError("please enter valid email");
                        return true;

                    }
                    else {
                        setemailError(" ")
                        if (name === "") {
                            setnameError("name cannot be blank");
                            return true;
                        }
                        else {
                            setnameError(" ")
                        }
                    }
                    if (bloodgroup === "") {
                        setbloodgroupError("bloodgroup cannot be blank")
                        return true;
                    }
                    else {
                        setbloodgroupError("")
                    }
                    if (password === "") {
                        setpasswordError("password cannot be blank");
                        return true;
                    }
                    else {
                        setpasswordError(" ")
                        if (!passwordregex.test(password)) {

                            console.log('password regex')
                            setpasswordError("enter valid password");
                            return true;
                        }
                        else {
                            console.log("password total")
                            setemailError(" ");
                            setpasswordError(" ");


                        }

                    }

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

        const addDonor = () => {
            let item = {
                name: name,
                email: email,
                password: password,
                bloodgroup: bloodgroup,
                phonenumber: phonenumber
            }
            console.log(item);
            let result = fetch('http://localhost:8080/user/create', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(item)


                //history.push('/Jobs')

            }).then(res => {
                result = res.json()
                if (res.status == 409) {
                    console.log('409')
                    setMessageError('Donor already exists');
                    setpasswordError(" ")
                    setphonenumberError("")

                    return true;

                }
                if (res.status != 409) {
                    setMessageError(" ");
                    setpasswordError(" ");
                    setphonenumberError("")
                    console.log('!409')
                    console.log(res)

                }
            })
        }


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
            <Link to="/plusdonor" class="nav1">Donor Form</Link>{"   "}
            <Link to="/viewhospitals" class="nav1">Hospitals Information</Link>{"   "}
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
                                    type="password" id="input" value={password}
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
