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
import Adddrive from './Drive/Adddrive';
import Bloodbank from './BloodBank/Bloodbank';
import Donorpage from './DonorPage/donorpage';
import Appointment from './Appointment/Appointment'
import Adddonor from './DonorInfo/Adddonor'
import Addhospitals from './Hospital/Addhospital';
import ViewHospitals from './Hospital/Hospital';
import Donor from './DonorInfo/Donor';
import Drive from './Drive/Drive'

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
          <Route path="/" element={<Addhospitals />}></Route>
        <Route path="/donor" element={<Donor />}></Route>
        <Route path="/drive" element={<Drive />}></Route>
        <Route path="/adddrive" element={<Adddrive />}></Route>
        <Route path="/bloodbank" element={<Bloodbank/>}></Route>
        <Route path="/donorpage" element={<Donorpage/>}></Route>
        <Route path="/viewappointment" element={<Appointment/>}></Route>
        <Route path="/plusdonor" element={<Adddonor/>}></Route>
        <Route path="/viewhospitals" element={<ViewHospitals/>}></Route>
      </Routes>  
    </Router>
  );
}

export default App;
