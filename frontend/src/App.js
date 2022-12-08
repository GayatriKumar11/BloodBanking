
import './App.css';
import BloodDrive from './pages/BloodDrive';
import Payment from './pages/Payment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DonorLogin from './pages/DonorLogin';

function App() {
  return (
    <div>


  <Router>
      <Routes>
      <Route exact path="/" element={<BloodDrive />}></Route>
      {/* <Route path="/donorHome" element={<DonorHome />}></Route> */}
      <Route exact path="/payment" element={<Payment />}></Route>
      <Route exact path="/donorLoggedIn" element={<DonorLogin />}></Route>
        </Routes>
    
  </Router>
  </div>

    
  );
}

export default App;
