import './App.css';
import Adddonor from './Hospital/Adddonor';
import Donor from './Donor/Donor';
import Drive from './Drive/Drive'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
//import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useEffect } from 'react';
import Adddrive from './Drive/Adddrive';
import Bloodbank from './Bloodbank/Bloodbank';


function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Adddonor />}></Route>
        <Route path="/donor" element={<Donor />}></Route>
        <Route path="/drive" element={<Drive />}></Route>
        <Route path="/adddrive" element={<Adddrive />}></Route>
        <Route path="/bloodbank" element={<Bloodbank/>}></Route>
      </Routes>


    </Router>
  );
}

export default App;
