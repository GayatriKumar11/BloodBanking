import './App.css';
import Donor from './Donor/Donor';
import Drive from './Drive/Drive'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
//import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useEffect } from 'react';
import Adddrive from './Drive/Adddrive';
import Bloodbank from './BloodBank/Bloodbank';
import Donorpage from './DonorPage/donorpage';
import Appointment from './Appointment/Appointment'
import Adddonor from './Donor/Adddonor'
import Addhospitals from './Hospital/Addhospital';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Addhospitals />}></Route>
        <Route path="/donor" element={<Donor />}></Route>
        <Route path="/drive" element={<Drive />}></Route>
        <Route path="/adddrive" element={<Adddrive />}></Route>
        <Route path="/bloodbank" element={<Bloodbank/>}></Route>
        <Route path="/donorpage" element={<Donorpage/>}></Route>
        <Route path="/viewappointment" element={<Appointment/>}></Route>
        <Route path="/plusdonor" element={<Adddonor/>}></Route>
      </Routes>


    </Router>
  );
}

export default App;
