import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './pages/Main'
import Home from './pages/Home'
import SignupHospital from "./receiver/SignupHospital"
import SigninHospital from './receiver/SigninHospital'
import SignupUser from './donor/SignupUser';
import SigninUser from './donor/SigninUser';
import SigninAdmin from './admin/SigninAdmin';
import ContactUs from './pages/ContactUs';
import Nav from './pages/Nav';
import EditProfileHospital from './receiver/EditProfileHospital';
import DasboardUser from './donor/DashboardUser';
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';
import SendEmail from './receiver/SendEmail';
import EditProfileUser from './donor/EditProfileUser';
import FindBloodCentre from './pages/FindBloodCentre';

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
          <Route
            exact path="/receiver/edit/:hospitalId"
            element={<EditProfileHospital />} />
          <Route exact path="/user/edit/:userId" element={<EditProfileUser />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/reset-password/:resetPasswordToken" element={<ResetPassword />} />
          <Route exact path="/send-email" element={<SendEmail />}/>
          <Route exact path="/findbloodcenter" element={<FindBloodCentre />} />
      </Routes>  
    </Router>
  );
}

export default App;
