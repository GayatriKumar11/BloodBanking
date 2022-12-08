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




function Bloodbank() {

    const [bloodbankname, setbloodbankname] = useState("");
    const [address, setaddress] = useState("");
    const [zipcode, setzipcode] = useState("");
    const [bloodgroup, setbloodgroup] = useState("");
    const [quantity, setquantity] = useState("");
    const [inventoryList, setinventoryList] = useState([]);
    const [newquantity, setnewquantity] = useState("");
    const [newbloodgroup, setnewbloodgroup] = useState("");
    let [addressError, setaddressError] = useState("");
    let [zipcodeError, setzipcodeError] = useState("");
    let [bloodbanknameError, setbloodbanknameError] = useState("");
    let [bloodgroupError, setbloodgroupError] = useState("");
    let [newbloodgroupError, setnewbloodgroupError] = useState("");
    let [newquantityError, setnewquantityError] = useState("");
    let [quantityError, setquantityError] = useState("");
    let [MessageError, setMessageError] = useState("");

    let validate = () => {

        var zipregex = /(^\d{5}$)|(^\d{5}-\d{4}$)/
        if (bloodgroup === "" && zipcode === "" && address === "" && bloodbankname === "" && quantity === "") {

            setbloodbanknameError("Bloodbank name can't be blank");
            setzipcodeError("zipcode can't be blank");
            setbloodgroupError("blood group can't be blank");
            setaddressError("Address cannot be blank");
            setquantityError("Quantity cannot be blank");
            setMessageError(" ");
            return true;
        }
        else {
            setbloodbanknameError("");
            setzipcodeError("");
            setbloodgroupError("");
            setaddressError("");
            setquantityError("");

        }

        if (bloodbankname === "" && address === "" && zipcode === "" && bloodgroup === "") {
            setbloodbanknameError("Bloodbank name can't be blank");
            setzipcodeError("zipcode can't be blank");
            setbloodgroupError("blood group can't be blank");
            setaddressError("Address cannot be blank");
            console.log("hello");
            // if (!zipcode==="") {
            //     setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
            //     setbloodbanknameError("Bloodbank name can't be blank");
            //     setbloodgroupError("blood group can't be blank");
            //     setaddressError("Address cannot be blank");
            //     return true;
            // }

            // {
            //     setzipcodeError("correct length");
            //     setbloodbanknameError("Bloodbank name can't be blank");
            //     setbloodgroupError("blood group can't be blank");
            //     setaddressError("Address cannot be blank");
            //     return true;
            // }

        }
        else {
            setbloodbanknameError("");
            setzipcodeError("");
            setbloodgroupError("");
            setaddressError("");

            if (bloodbankname === "" && address === "" && zipcode === "" && quantity === "") {
                setbloodbanknameError("Bloodbank name can't be blank");
                setzipcodeError("zipcode can't be blank");
                setaddressError("Address cannot be blank");
                setquantityError("Quantity cannot be blank");
                return true;

            }
            else {
                setbloodbanknameError("");
                setzipcodeError("");
                setaddressError("");
                setquantityError("");

                if (bloodbankname === "" && address === "" && bloodgroup === "" && quantity === "") {

                    setbloodbanknameError("Bloodbank name can't be blank");
                    setbloodgroupError("blood group can't be blank");
                    setaddressError("Address cannot be blank");
                    setquantityError("Quantity cannot be blank");
                    return true;
                }
                else {
                    setbloodbanknameError("");
                    setbloodgroupError("");
                    setaddressError("");
                    setquantityError("");

                    if (bloodbankname === "" && zipcode === "" && bloodgroup === "" && quantity === "") {

                        setbloodbanknameError("Bloodbank name can't be blank");
                        setzipcodeError("zipcode cannott be blank");
                        setbloodgroupError("Address cannot be blank");
                        setquantityError("Quantity cannot be blank");
                        return true;
                    }
                    else {
                        setbloodbanknameError("");
                        setzipcodeError("");
                        setbloodgroupError("");
                        setquantityError("");

                        if (address === "" && zipcode === "" && bloodgroup === "" && quantity === "") {

                            setquantityError("Quantity cannot be blank");
                            setzipcodeError("zipcode can't be blank");
                            setbloodgroupError("blood group can't be blank");
                            setaddressError("Address can't be blank");
                            return true;


                        }
                        else {
                            setzipcodeError("");
                            setbloodgroupError("");
                            setaddressError("");
                            setquantityError("");

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
                setbloodbankname("");
                setaddress("");
                setbloodgroup("");
                setzipcode("");
                setquantity("");
                console.log('adding inventory')
                addBloodbank();
            }
        }
        catch (err) {
            console.log(err);
        }
    };




    const addBloodbank = () => {
        let item = {
            bloodbankname: bloodbankname,
            address: address,
            zipcode: zipcode,
            bloodgroup: bloodgroup,
            quantity: quantity
        }
        console.log(item);
        let result = fetch('http://localhost:8080/bloodbank/create', {
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
                setMessageError('Blood Bank already exists');
                setzipcodeError(" ")
                setquantityError("")

                return true;

            }
            if (res.status != 409) {
                setMessageError(" ");
                setzipcodeError(" ");
                setquantityError("")
                console.log('!409')
                console.log(res)
                setinventoryList([
                    ...inventoryList,
                    {
                        bloodbankname: bloodbankname,
                        address: address,
                        zipcode: zipcode,
                        bloodgroup: bloodgroup,
                        quantity: quantity

                    },
                ])
            }
        })
    }


    const getBloodbank = () => {
        Axios
            .get("http://localhost:8080/bloodbank/getAll").then((response) => {
                setinventoryList(response.data);
            });
    };

    const updateBloodbank = (zipcode) => {

        if (newbloodgroup === "" && newquantity === "") {
            console.log('hello new ')
            alert("Please enter blood group");
            alert("Please enter quantity");
            return true;
        } else if (newbloodgroup === "") {
            alert("Please enter blood group");

        } else if (newquantity === "") {
            alert("Please enter quantity");

        } else {
            console.log("clearing updating");
            setnewquantity("")
            setnewbloodgroup("")
            Axios.put('http://localhost:8080/bloodbank/edit', { bloodgroup: newbloodgroup, quantity: newquantity, zipcode: zipcode }).then(
                (response) => {
                    setinventoryList(
                        inventoryList.map((val) => {
                            return val.zipcode == zipcode
                                ? {
                                    id: val.id,
                                    bloodbankname: val.bloodbankname,
                                    address: val.address,
                                    zipcode: val.zipcode,
                                    bloodgroup: newbloodgroup,
                                    quantity: newquantity
                                }
                                : val;
                        })
                    );
                }
            );


        }

        // setnewbloodgroupError("");
        // setnewquantityError("");
        // if (newbloodgroup == " ") {
        //     setnewbloodgroupError("update cannot be done when blood type is empty");
        //     return true;
        // }
        // else if() {
        //     setnewbloodgroup("")
        //     if (newquantity == "") {
        //         setnewquantityError("update cannot de done when quantity is empty111");
        //         return true;
        //     }
        //     else {
        //         setnewquantityError("")
        //         console.log("clearing updating");
        //         Axios.put('http://localhost:8080/bloodbank/edit', { bloodgroup: newbloodgroup, quantity: newquantity, zipcode: zipcode }).then(
        //             (response) => {
        //                 setinventoryList(
        //                     inventoryList.map((val) => {
        //                         return val.zipcode == zipcode
        //                             ? {
        //                                 id: val.id,
        //                                 bloodbankname: val.bloodbankname,
        //                                 address: val.address,
        //                                 zipcode: val.zipcode,
        //                                 bloodgroup: newbloodgroup,
        //                                 quantity: newquantity
        //                             }
        //                             : val;
        //                     })
        //                 );
        //             }
        //         );
        //     }
        // }





    }



    const deleteBloodbank = (zipcode) => {

        console.log(zipcode)
        fetch(`http://localhost:8080/bloodbank/delete/${zipcode}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then((response) => {
            setinventoryList(
                inventoryList.filter((val) => {
                    return val.zipcode != zipcode;
                })
            );
        });


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
            <Link to="/plusdonor" class="nav1">Donor Form</Link>{"   "}
            <Link to="/viewhospitals" class="nav1">Hospitals Information</Link>{"   "}

                    </Navbar.Brand>
                </Container>
            </Navbar>

            <div style={myStyle}>
                <Card className="bg-danger" id="adddonor">
                    <div className="App">
                        <div className="information">
                            <h1>BloodBank Inventory</h1>
                            <br></br>
                            <br></br>
                            <label id="label">Bloodbank Name:</label>
                            <input id="input"
                                type="text" value={bloodbankname}
                                onChange={(event) => {
                                    setbloodbankname(event.target.value);
                                }}
                            />
                            <div style={{ fontSize: 17, color: "white" }}>{bloodbanknameError ? <p>{bloodbanknameError}</p> : null}</div>

                            <label id="label">Bloodgroup:</label>
                            <input
                                type="text" id="input" value={bloodgroup}
                                onChange={(event) => {
                                    setbloodgroup(event.target.value);
                                }}
                            />
                            <div style={{ fontSize: 17, color: "white" }}>{bloodgroupError ? <p>{bloodgroupError}</p> : null}</div>
                            <label id="label">Quantity:</label>
                            <input
                                type="text" id="input" value={quantity}
                                onChange={(event) => {
                                    setquantity(event.target.value);
                                }}
                            />
                            <div style={{ fontSize: 17, color: "white" }}>{quantityError ? <p>{quantityError}</p> : null}</div>

                            <label id="label">Address:</label>
                            <input
                                type="text" id="input" value={address}
                                onChange={(event) => {
                                    setaddress(event.target.value);
                                }}
                            />
                            <div style={{ fontSize: 17, color: "white" }}>{addressError ? <p>{addressError}</p> : null}</div>
                            <label id="label">Zipcode:</label>
                            <input
                                type="text" id="input" value={zipcode}
                                onChange={(event) => {
                                    setzipcode(event.target.value);
                                }}
                            />
                            <br></br>
                            <div style={{ fontSize: 17, color: "white" }}>{zipcodeError ? <p>{zipcodeError}</p> : null}</div>
                            <button id="button" onClick={Adding}>Add Inventory</button>
                        </div>
                        <div style={{ fontSize: 17, color: "white" }}>{MessageError ? <p>{MessageError}</p> : null}</div>
                        <div className="inventories">
                            <button id="button" onClick={getBloodbank}>List of Bloodbanks</button>

                            {inventoryList.map((val, key) => {
                                return (
                                    <div className="inventories">
                                        <div id="label">
                                            <h3>BloodbankName: {val.bloodbankname}</h3>
                                            <h3>Address: {val.address}</h3>
                                            <h3>Zipcode: {val.zipcode}</h3>
                                            <h3>Bloodgroup: {val.bloodgroup}</h3>
                                            <h3>Quantity: {val.quantity}</h3>
                                        </div>
                                        <div>
                                            <input
                                                type="text" id="input"
                                                placeholder="update bloodgroup"
                                                value={newbloodgroup}
                                                onChange={(event) => {
                                                    setnewbloodgroup(event.target.value);
                                                }}
                                            />
                                            <br></br>
                                            <br></br>
                                            <div style={{ fontSize: 17, color: "white" }}>{newbloodgroupError ? <p>{newbloodgroupError}</p> : null}</div>
                                            <input
                                                type="text" id="input"
                                                placeholder="update quantity"
                                                value={newquantity}
                                                onChange={(event) => {
                                                    setnewquantity(event.target.value);
                                                }}
                                            />
                                            <br></br>
                                            <br></br>
                                            <div style={{ fontSize: 17, color: "white" }}>{newquantityError ? <p>{newquantityError}</p> : null}</div>


                                            <button id="updatebutton"
                                                onClick={() => {
                                                    updateBloodbank(val.zipcode);
                                                }}
                                            >
                                                {" "}
                                                Update
                                            </button>

                                            <br></br>
                                            <button id="deletebutton"
                                                onClick={() => {
                                                    deleteBloodbank(val.zipcode);
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </Card>
            </div>
        </>


    )





}
export default Bloodbank
