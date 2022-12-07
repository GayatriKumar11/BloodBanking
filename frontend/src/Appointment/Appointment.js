import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Adddonor from "../Hospital/Adddonor"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import image from '../Hospital/Blue.png';
import Adddrive from '../Drive/Adddrive';
import Drive from '../Drive/Drive'


function Appointment() {
  const [appointment, setappointment] = useState([]);

  useEffect(() => {
    fetchappointment();
  }, []);
  const fetchappointment = () => {
    axios
      .get('http://localhost:8080/appointment/getAll')
      .then((res) => {
        console.log(res);
        setappointment(res.data);
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

      <div id="background">
        <br></br>
        <h2>Appointment Information</h2>
        <Card className="bg-warning text-black" id="donor">
          <Table striped bordered hover responsive="md" id="tabledonor">
            <thead >
              <tr >
                <th>BloodBank</th>
                <th>FullName</th>
                <th>Date</th>
                <th>Email</th>
               
              </tr>
            </thead>
            <tbody >
              {appointment.map((item, index) => (
                <tr key={index} >
                  <td>{item.bloodbankname}</td>

                  <td>{item.fullname}</td>

                  <td>{item.date}</td>

                  <td>{item.email}</td>
             
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </div>
    </>
  );
};
export default Appointment;