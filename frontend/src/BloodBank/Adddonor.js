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
import Adddrive from "../Drive/Adddrive";
import Drive from '../Drive/Drive'


function Adddonor() {

  const [hospitalname, sethospitalname] = useState("");
  const [address, setaddress] = useState("");
  const [zipcode, setzipcode] = useState("");
  const [bloodgroup, setbloodgroup] = useState("");
  const [inventoryList, setinventoryList] = useState([]);
  const [newbloodgroup, setnewbloodgroup] = useState("");
  let [addressError, setaddressError] = useState("");
  let [zipcodeError, setzipcodeError] = useState("");
  let [hospitalnameError, sethospitalnameError] = useState("");
  let [bloodgroupError, setbloodgroupError] = useState("");
  let [newbloodgroupError, setnewbloodgroupError] = useState("");
  let [MessageError, setMessageError] = useState("");

  let validate = () => {


    if (bloodgroup === "" && zipcode === "" && address === "" && hospitalname === "") {

      sethospitalnameError("hospital name can't be blank");
      setzipcodeError("zipcode can't be blank");
      setbloodgroupError("blood group can't be blank");
      setaddressError("Address cannot be blank");
      setMessageError(" ");
      return true;
    }
    else {
      setaddressError("");
      sethospitalnameError("");
      setzipcodeError("");
      setbloodgroupError("");
    }

    if (hospitalname === "" && address === "" && bloodgroup === "") {
      sethospitalnameError("hospital name can't be empty")
      setaddressError("address can't be empty")
      setbloodgroupError("bloodgroup can't be empty")
      return true;

    }
    else {
      sethospitalnameError("")
      setaddressError("")
      setbloodgroupError("")
      if (hospitalname === "" && address === "" && zipcode === "") {
        sethospitalnameError("hospital name can't be empty")
        setaddressError("address can't be empty")
        setzipcodeError("zipcode can't be empty")
        return true;
      }
      else {
        sethospitalnameError("")
        setaddressError("")
        setzipcodeError("")
        if (address === "" && zipcode === "" && bloodgroup === "") {
          setbloodgroupError("bloodgroup can't be empty")
          setaddressError("address can't be empty")
          setzipcodeError("zipcode can't be empty")
          return true;
        }
        else {
          setbloodgroupError("")
          setaddressError("")
          setzipcodeError("")
          if (hospitalname == "" && bloodgroup == "" && zipcode === "") {
            sethospitalnameError("hospital name can't be empty")
            setbloodgroupError("blood group can't be empty")
            setzipcodeError("zipcode can't be empty")
            return true;
          }
          else {
            setbloodgroupError("")
            sethospitalnameError("")
            setzipcodeError("")
          }
        }
      }
    }

    if (hospitalname === "" && address === "") {
      sethospitalnameError("Hospital Name can't be empty")
      setaddressError("Address can't be empty")
      return true;
    }
    else {
      sethospitalnameError(" ")
      setaddressError(" ")
      if (hospitalname === "" && zipcode === "") {
        sethospitalnameError("Hospital Name can't be empty")
        setzipcodeError("zipcode can't be empty")
        return true;
      }
      else {
        sethospitalnameError("")
        setzipcodeError("")
        if (hospitalname === "" && bloodgroup === "") {
          sethospitalnameError("HospitalName can't be empty")
          setbloodgroupError("bloodgroup can't be empty")
          return true;
        }
        else {
          sethospitalnameError(" ")
          setbloodgroupError(" ")
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
              if (zipcode == "" && bloodgroup == "") {
                setzipcodeError("zipcode can't be empty")
                setbloodgroupError("bloodgroup can't be empty")
                return true;
              }
              else {
                setzipcodeError("")
                setbloodgroupError("")
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
    if (hospitalname === "") {
      sethospitalnameError("hospital name cannot be blank");
      return true;
    }
    else {
      sethospitalnameError(" ")
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
    var zipregex=/(^\d{5}$)|(^\d{5}-\d{4}$)/
    if(!zipregex.test(zipcode))
    {
      console.log('error testing')
      setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
      return true;
    }
    setzipcodeError(" ")

  }




  var Adding = (e) => {
 
    try {
      if (!validate()) {
        e.preventDefault();
        sethospitalname("");
        setaddress("");
        setbloodgroup("");
        setzipcode("");
        console.log('adding inventory')
        addinventory();
       
      }
    }
    catch (err) {
      console.log(err);
    }
  };



  let Empty = () => {
    console.log('empoty')
    sethospitalname("");
    setaddress("");
    setbloodgroup("");
    setzipcode("");
    

  };


  const addinventory = () => {
    let item = {
      hospitalname: hospitalname,
      address: address,
      zipcode: zipcode,
      bloodgroup: bloodgroup,
    }
    console.log(item);
    let result = fetch('http://localhost:8080/inventory/create', {
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
        setMessageError('Inventory already exists');
        setzipcodeError(" ")
        return true;

      }
      if (res.status != 409) {
        setMessageError(" ");
        setzipcodeError(" ");
        console.log('!409')
        setinventoryList([
          ...inventoryList,
          {
            hospitalname: hospitalname,
            address: address,
            zipcode: zipcode,
            bloodgroup: bloodgroup,

          },
        ])
      }
    })
  }


  const getinventories = () => {
    Axios
      .get("http://localhost:8080/inventory/getAll").then((response) => {
        setinventoryList(response.data);
      });
  };

  const updateinventory = (zipcode) => {
    setnewbloodgroup("")
    if (newbloodgroup === "") {
      setnewbloodgroupError("update cannot be done");
      return true;
    }
    else {
      console.log("clearing updating");
      Axios.put('http://localhost:8080/inventory/edit', { bloodgroup: newbloodgroup, zipcode: zipcode }).then(
        (response) => {
          setinventoryList(
            inventoryList.map((val) => {
              return val.zipcode == zipcode
                ? {
                  id: val.id,
                  hospitalname: val.hospitalname,
                  address: val.address,
                  zipcode: val.zipcode,
                  bloodgroup: newbloodgroup,
                }
                : val;
            })
          );
        }
      );
    };
   
    
  }



  const deleteinventory = (zipcode) => {

    console.log(zipcode)
    fetch(`http://localhost:8080/inventory/delete/${zipcode}`, {
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
    backgroundImage: "url('https://www.physiciansweekly.com/wp-content/uploads/2018/04/a388e7f1-istock-894125638.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width:'100%',
    height: 'auto',
    marginright: '100px'
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
        <Card className="bg-warning text-black" id="adddonor">
          <div className="App">
            <div className="information">
              <h1>BloodBank Inventory</h1>
              <br></br>
              <br></br>
              <label>Hospital Name:</label>
              <input id="input"
                type="text" value={hospitalname}
                onChange={(event) => {
                  sethospitalname(event.target.value);
                }}
              />
              <div style={{ fontSize: 15, color: "red" }}>{hospitalnameError ? <p>{hospitalnameError}</p> : null}</div>
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
              <label>bloodgroup:</label>
              <input
                type="text" id="input" value={bloodgroup}
                onChange={(event) => {
                  setbloodgroup(event.target.value);
                }}
              />
              <div style={{ fontSize: 15, color: "red" }}>{bloodgroupError ? <p>{bloodgroupError}</p> : null}</div>
              <br></br>
              <button id="button" onClick={Adding}>Add Inventory</button>
            </div>
            <div style={{ fontSize: 15, color: "red" }}>{MessageError ? <p>{MessageError}</p> : null}</div>
            <div className="inventories">
              <button id="button" onClick={getinventories}>List of inventory</button>

              {inventoryList.map((val, key) => {
                return (
                  <div className="inventories">
                    <div>
                      <h3>HospitalName: {val.hospitalname}</h3>
                      <h3>Address: {val.address}</h3>
                      <h3>zipcode: {val.zipcode}</h3>
                      <h3>bloodgroup: {val.bloodgroup}</h3>
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
                      <div style={{ fontSize: 15, color: "red" }}>{newbloodgroupError ? <p>{newbloodgroupError}</p> : null}</div>
                      <button id="updatebutton"
                        onClick={() => {
                          updateinventory(val.zipcode);
                        }}
                      >
                        {" "}
                        Update
                      </button>

                      <br></br>
                      <button id="deletebutton"
                        onClick={() => {
                          deleteinventory(val.zipcode);
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


export default Adddonor
