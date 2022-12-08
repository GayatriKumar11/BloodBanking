import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './pages/Main'
import Home from './pages/Home'
import SignupHospital from "./receiver/SignupHospital"
import SigninHospital from './receiver/SigninHospital'
import SignupUser from './donnor/SignupUser';
import SigninUser from './donnor/SigninUser';
import SigninAdmin from './admin/SigninAdmin';
import ContactUs from './pages/ContactUs';
import Nav from './pages/Nav';
import EditProfileHospital from './receiver/EditProfileHospital';
import DasboardUser from './donnor/DashboardUser';
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';
import SendEmail from './receiver/SendEmail';
import EditProfileUser from './donnor/EditProfileUser';
import FindBloodCentre from './pages/FindBloodCentre';
import Bloodbank from './BloodBank/Bloodbank';
import DonorForm from './pages/DonorForm';
import BloodDrive from './pages/BloodDrive';
import Payment from './pages/Payment';
import DonorLogin from './pages/DonorLogin';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import DashboardHospital from './receiver/DashboardHospital';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/signupsignin" element={<Home />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/signup-hospital" element={<SignupHospital />} />
          <Route exact path="/signin-hospital" element={<SigninHospital />} />
          <Route exact path="/signup-user" element={<SignupUser />} />
          <Route exact path="/signin-user" element={<SigninUser />} />
          <Route exact path="/signin-admin" element={<SigninAdmin />} />
          <Route exact path="/dashboard-user/:userId" element={<DasboardUser />} />
          <Route exact path="/dashboard-admin/:adminId" element={<Bloodbank />} />
          <Route
            exact path="/receiver/edit/:hospitalId"
            element={<EditProfileHospital />} />
          <Route
            exact path="/dashboard-hospital/:hospitalId"
            element={<DashboardHospital />} />
          <Route exact path="/user/edit/:userId" element={<EditProfileUser />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/reset-password/:resetPasswordToken" element={<ResetPassword />} />
          <Route exact path="/send-email" element={<SendEmail />}/>
          <Route exact path="/findbloodcenter" element={<FindBloodCentre />} />
          <Route exact path="/donor-eligibility" element={<DonorForm />} />
          <Route exact path="/MakeADonation" element={<BloodDrive />} />
          <Route exact path="/Payment" element={<Payment />} />
          <Route exact path="/BookAppointment" element={<DonorLogin />} />
      </Routes>  
    </Router>
  );
}

export default App;
