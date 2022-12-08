import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Adddonor from './Addhospital';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import image from '../Hospital/Blue.png';
import Donor from '../DonorInfo/Donor'


function Hospital() {
  const [hospital, sethospital] = useState([]);

  useEffect(() => {
    fetchhospitals();
  }, []);
  const fetchhospitals = () => {
    axios
      .get('http://localhost:8080/inventory/getAll')
      .then((res) => {
        console.log(res);
        sethospital(res.data);
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
        <h2 id="driveheading">Hospitals Information</h2>
        <Card className="bg-danger" id="donor">
          <Table striped bordered variant="light" hover responsive="md" id="tabledonor">
            <thead >
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Zipcode</th>
                <th>BloodGroup</th>

              </tr>
            </thead>
            <tbody >
              {hospital.map((item, index) => (
                <tr key={index}>
                  <td>{item.hospitalname}</td>

                  <td>{item.address}</td>

                  <td>{item.zipcode}</td>

                  <td>{item.bloodgroup}</td>


                </tr>
              ))}

            </tbody>
          </Table>
        </Card>
      </div>
    </>
  );
};
export default Hospital;