import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Adddonor from "../Hospital/Addhospital"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import image from '../Hospital/Blue.png';
import Adddrive from '../Drive/Adddrive';
import Drive from '../Drive/Drive'


function Donor() {
  const [donor, setdonor] = useState([]);

  useEffect(() => {
    fetchdonor();
  }, []);
  const fetchdonor = () => {
    axios
      .get('http://localhost:8080/user/getAll')
      .then((res) => {
        console.log(res);
        setdonor(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
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

      <div id="background">
        <br></br>
        <h2 id="donorheading">Donor Information</h2>
        <Card className="bg-danger" id="donor">
          <Table striped bordered variant="light" hover responsive="md" id="tabledonor">
            <thead >
              <tr >
                <th>Name</th>
                <th>Email</th>
                <th>PhoneNumber</th>
                <th>Blood Group</th>
                <th id="requestheader">Request</th>
              </tr>
            </thead>
            <tbody >
              {donor.map((item, index) => (
                <tr key={index} >
                  <td>{item.name}</td>

                  <td>{item.email}</td>

                  <td>{item.phonenumber}</td>

                  <td>{item.bloodgroup}</td>
                  <td>
                    <a href="mailto:email@example.com? &subject=Request to review information for Blood Donation &body= Hi! We request you to please review the attached information and fill the attached form inorder to be eligible to donate blood"  ><button id="requestbutton">Request</button></a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </div>
    </>
  );
};
export default Donor;