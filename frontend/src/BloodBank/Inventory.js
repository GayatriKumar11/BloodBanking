import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import EditDonor from './EditDonor';
import FeaturedProducts from './Donor';
import Table from 'react-bootstrap/Table';
function Inventory() {

  const [inventory, setinventory] = useState([]);
  useEffect(() => {
    fetchinventory();
  }, []);
  const fetchinventory = () => {
    axios
      .get('http://localhost:8080/inventory/getAll')
      .then((res) => {
        console.log(res);
        setinventory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [searchText, setSearchText] = useState('');
  const filter = inventory.filter(product => product.zipcode.toLowerCase().includes(searchText.toLowerCase()))
  return (

    <div className="item-container">
      <div className="card">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Hospital Name</th>
    
              <th>Address</th>
           
              <th>Zipcode</th>
             
              <th>Bloodgroup</th>

              <th>Add</th>

              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {filter.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.hospitalname}</td>
              <br></br>
              <td>{item.address}</td>
              <br></br>
              <td>{item.zipcode}</td>
              <br></br>
              <td>{item.bloodgroup}</td>
              <td>
                <button>Add</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
          </tbody>
        </Table>
      </div>
    </div>
  );


};
export default Inventory;