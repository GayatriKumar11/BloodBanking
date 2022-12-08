import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Adddonor from '../Hospital/Adddonor';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import image from '../Hospital/Blue.png';
import Adddrive from './Adddrive';
import Donor from '../Donor/Donor'


function Drive() {
  const [drive, setdrive] = useState([]);

  useEffect(() => {
    fetchdrive();
  }, []);
  const fetchdrive = () => {
    axios
      .get('http://localhost:8080/drive/getAll')
      .then((res) => {
        console.log(res);
        setdrive(res.data);
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

          </Navbar.Brand>
        </Container>
      </Navbar>
      <div id="background">
        <br></br>
        <h2 id="driveheading">Drive Information</h2>
        <Card className="bg-danger" id="donor">
          <Table striped bordered variant="light" hover responsive="md" id="tabledonor">
            <thead >
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Zipcode</th>
                <th>Date</th>

              </tr>
            </thead>
            <tbody >
              {drive.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>

                  <td>{item.address}</td>

                  <td>{item.zipcode}</td>

                  <td>{item.date}</td>


                </tr>
              ))}

            </tbody>
          </Table>
        </Card>
      </div>
    </>
  );
};
export default Drive;