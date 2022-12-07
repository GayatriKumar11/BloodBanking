import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './core/Home'
import SignupHospital from "./receiver/SignupHospital"
import SigninHospital from './receiver/SigninHospital'
import SignupUser from './donor/SignupUser';
import SigninUser from './donor/SigninUser';
import SigninAdmin from './admin/SigninAdmin';
import Nav from './core/Nav';
import EditProfileHospital from './receiver/EditProfileHospital';
import ForgotPassword from './auth/ForgotPassword';
import SendEmail from './receiver/SendEmail';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup-hospital" element={<SignupHospital />} />
          <Route exact path="/signin-hospital" element={<SigninHospital />} />
          <Route exact path="/signup-user" element={<SignupUser />} />
          <Route exact path="/signin-user" element={<SigninUser />} />
          <Route exact path="/signin-admin" element={<SigninAdmin />} />
          <Route
            exact path="/receiver/edit/:hospitalId"
            element={<EditProfileHospital />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/send-email" element={<SendEmail />}/>
      </Routes>  
    </Router>
  );
}

export default App;
