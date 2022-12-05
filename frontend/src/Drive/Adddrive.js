import React from "react";
import { renderMatches, useNavigate, } from 'react-router-dom'
import { useState } from "react";
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import image from '../BloodBank/Blue.png';
import Donor from '../Donor/Donor'
import Adddonor from "../BloodBank/Adddonor";
import Drive from '../Drive/Drive'


function Adddrive() {

  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [zipcode, setzipcode] = useState("");
  const [date, setdate] = useState("");
  const [driveList, setdriveList] = useState([]);
  const [newdate, setnewdate] = useState("");
  let [addressError, setaddressError] = useState("");
  let [zipcodeError, setzipcodeError] = useState("");
  let [nameError, setnameError] = useState("");
  let [dateError, setdateError] = useState("");
  let [newdateError, setnewdateError] = useState("");
  let [MessageError, setMessageError] = useState("");

  let validate = () => {


    if (date === "" && zipcode === "" && address === "" && name === "") {

      setnameError("name can't be blank");
      setzipcodeError("zipcode can't be blank");
      setdateError("date can't be blank");
      setaddressError("Address cannot be blank");
      setMessageError("");
      return true;
    }
    else {
      setaddressError("");
      setnameError("");
      setzipcodeError("");
      setdateError("");
    }

    if (name === "" && address === "" && date === "") {
      setnameError("name can't be empty")
      setaddressError("address can't be empty")
      setdateError("date can't be empty")
      return true;

    }
    else {
      setnameError("")
      setaddressError("")
      setdateError("")
      if (name === "" && address === "" && zipcode === "") {
        setnameError("name can't be empty")
        setaddressError("address can't be empty")
        setzipcodeError("zipcode can't be empty")
        return true;
      }
      else {
        setnameError("")
        setaddressError("")
        setzipcodeError("")
        if (address === "" && zipcode === "" && date === "") {
          setdateError("date can't be empty")
          setaddressError("address can't be empty")
          setzipcodeError("zipcode can't be empty")
          return true;
        }
        else {
          setdateError("")
          setaddressError("")
          setzipcodeError("")
          if (name == "" && date == "" && zipcode === "") {
            setnameError("name can't be empty")
            setdateError("date can't be empty")
            setzipcodeError("zipcode can't be empty")
            return true;
          }
          else {
            setdateError("")
            setnameError("")
            setzipcodeError("")
          }
        }
      }
    }

    if (name === "" && address === "") {
      setnameError("Name can't be empty")
      setaddressError("Address can't be empty")
      return true;
    }
    else {
      setnameError(" ")
      setaddressError(" ")
      if (name === "" && zipcode === "") {
        setnameError("Name can't be empty")
        setzipcodeError("zipcode can't be empty")
        return true;
      }
      else {
        setnameError("")
        setzipcodeError("")
        if (name === "" && date === "") {
          setnameError("HospitalName can't be empty")
          setdateError("bloodgroup can't be empty")
          return true;
        }
        else {
          setnameError(" ")
          setdateError(" ")
          if (address === "" && zipcode === "") {
            setaddressError("address can't be empty")
            setzipcodeError("zipcode can't be empty")
            return true;
          }
          else {
            setaddressError("")
            setzipcodeError("")
            if (address === "" && date === "") {
              setaddressError("address can't be empty")
              setdateError("date can't be empty")
              return true;
            }
            else {
              setaddressError("")
              setdateError("")
              if (zipcode == "" && date == "") {
                setzipcodeError("zipcode can't be empty")
                setdateError("date can't be empty")
                return true;
              }
              else {
                setzipcodeError("")
                setdateError("")
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
    if (name === "") {
      setnameError("name cannot be blank");
      return true;
    }
    else {
      setnameError(" ")
    }
    if (date === "") {
      setdateError("bloodgroup cannot be blank")
      return true;
    }
    else {
      setdateError("")
    }
    if (zipcode === "") {
      setzipcodeError("zipcode cannot be blank");
      return true;
    }
    else {
      setzipcodeError(" ")
    }
    var zipregex=/(^\d{5}$)|(^\d{5}-\d{4}$)/
    if(!zipregex.test(zipcode))
    {
      console.log('error testing')
      setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
      return true;
    }
    setzipcodeError(" ")
  }




  let Adding = async (e) => {
    try {
      if (!validate()) {
        e.preventDefault();
        setname("");
        setaddress("");
        setdate("");
        setzipcode("");
        console.log('adding inverntory')
        addEvent();
       
      }
    }
    catch (err) {
      console.log(err);
    }
  };


  const addEvent = () => {
    let item = {
      name: name,
      address: address,
      zipcode: zipcode,
      date: date,
    }
    console.log(item);
    let result = fetch('http://localhost:8080/drive/create', {
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
        setMessageError('drive already exists');
        setzipcodeError(" ")
        return true;

      }
      if (res.status != 409) {
        setMessageError(" ");
        setzipcodeError(" ")
        console.log('!409')
        setdriveList([
          ...driveList,
          {
            name: name,
            address: address,
            zipcode: zipcode,
            date: date,

          },
        ])
      }
    })
  }


  const getDrives = () => {
    Axios
      .get("http://localhost:8080/drive/getAll").then((response) => {
        setdriveList(response.data);
      });
  };

  const updateDrive = (zipcode) => {

    if (newdate === "") {
      setnewdateError("update cannot be done");
      return true;
    }
    else {
      console.log("clearing updating");
      setnewdateError("")
      Axios.put('http://localhost:8080/drive/edit', { date: newdate, zipcode: zipcode }).then(
        (response) => {
          setdriveList(
            driveList.map((val) => {
              return val.zipcode == zipcode
                ? {
                  id: val.id,
                  name: val.name,
                  address: val.address,
                  zipcode: val.zipcode,
                  date: newdate,
                }
                : val;
            })
          );
        }
      );

    };
   
  }



  const deleteDrive = (zipcode) => {

    console.log(zipcode)
    fetch(`http://localhost:8080/drive/delete/${zipcode}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then((response) => {
      setdriveList(
        driveList.filter((val) => {
          return val.zipcode != zipcode;
        })
      );
    });


  };

  const myStyle = {
    backgroundImage: "url('https://img.freepik.com/free-photo/close-up-students-standing-hands-making-fist-bump-gesture_1150-4512.jpg?w=1060&t=st=1670188203~exp=1670188803~hmac=1b0d618ac0c765bf66307a075ce44e6ee77e2bb04e4949937b5be6d13bcb313a')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: 'auto',
    marginright: '50px'
  };
  return (
    <>

      <Navbar id="navbar" bg="dark">
        <Container>
          <Navbar.Brand class="nav1">
            <Link to='/' class="nav1">Blood Bank</Link> {"   "}
            <Link to="/donor" class="nav1">Donor info</Link>{"   "}
            <Link to="/drive" class="nav1">Drive info</Link>{"   "}
            <Link to="/adddrive" class="nav1">Drive Admin</Link>{"   "}
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div style={myStyle}>
        <Card className="bg-warning text-black" id="adddrive">
          <div className="App1">
            <div className="information1">
              <h1>Drive Inventory</h1>
              <br></br>
              <br></br>
              <label> Name:</label>
              <input id="input"
                type="text" value={name}
                onChange={(event) => {
                  setname(event.target.value);
                }}
              />
              <div style={{ fontSize: 15, color: "red" }}>{nameError ? <p>{nameError}</p> : null}</div>
              <label>Address:</label>
              <input
                type="text" id="input" value={address}
                onChange={(event) => {
                  setaddress(event.target.value);
                }}
              />
              <div style={{ fontSize: 15, color: "red" }}>{addressError ? <p>{addressError}</p> : null}</div>
              <label>zipcode:</label>
              <input
                type="text" id="input" value={zipcode}
                onChange={(event) => {
                  setzipcode(event.target.value);
                }}
              />
              <div style={{ fontSize: 15, color: "red" }}>{zipcodeError ? <p>{zipcodeError}</p> : null}</div>
              <label>Date:</label>
              <input
                type="date" id="input" value={date}
                onChange={(event) => {
                  setdate(event.target.value);
                }}
              />
              <div style={{ fontSize: 15, color: "red" }}>{dateError ? <p>{dateError}</p> : null}</div>
              <br></br>
              <button id="button" onClick={Adding}>Add Drive</button>
            </div>
            <div id="Messageerror" style={{ fontSize: 15, color: "red" }}>{MessageError ? <p>{MessageError}</p> : null}</div>
            <div className="drives">
              <button id="button" onClick={getDrives}>List of Drive Info</button>

              {driveList.map((val, key) => {
                return (
                  <div className="drives">
                    <div>
                      <h3>Name: {val.name}</h3>
                      <h3>Address: {val.address}</h3>
                      <h3>zipcode: {val.zipcode}</h3>
                      <h3>Date: {val.date}</h3>
                    </div>
                    <div>
                      <input
                        type="date" id="inputdate"
                        placeholder="update date"
                        value={newdate}
                        onChange={(event) => {
                          setnewdate(event.target.value);
                        }}
                      />
                      <br></br>
                      <div style={{ fontSize: 15, color: "red" }}>{newdateError ? <p>{newdateError}</p> : null}</div>
                      <button id="updatebutton"
                        onClick={() => {
                          updateDrive(val.zipcode);
                        }}
                      >
                        {" "}
                        Update
                      </button>

                      <br></br>
                      <button id="deletebutton"
                        onClick={() => {
                          deleteDrive(val.zipcode);
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


export default Adddrive
