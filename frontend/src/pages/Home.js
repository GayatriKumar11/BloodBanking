import React from "react";
import { Link } from "react-router-dom";
import Header from '../components/Header';
import DonorImg from "../images/home-user.png";
import HospitalAvatar from "../images/nurse.svg";
import AdminAvatar from "../images/admin5.png";
import Footer from "../components/Footer";
import {
    useLocation,
    useNavigate,
    useParams,
  } from "react-router-dom";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
}

const Home = ({ history }) => (
    <div className="container">
      <Header />
      <br></br><br></br>
        <div
          className="container bg-light"
          style={{
            color: "gray",
            borderRadius: "25px",
            height: "320px",
            width: "4000px",
            marginTop: "90px"
          }}
        >
          <h2 className="p-2 text-center"> Please Signup and Login here</h2>
          <img
            src={DonorImg}
            className="rounded mx-auto d-block mt-4 "
            alt="donor image"
            style={{ width: "150px" }}
          />
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <Link
              to="/signup-user"
              className=" btn btn-block text-light"
              style={{backgroundColor: "darkred"}}
            >
              Sign Up
            </Link>
            <Link
              to="/signin-user"
              className=" btn btn-block text-light"
              style={{backgroundColor: "darkred", margin: "20px"}}
            >
              Login
            </Link>
          </div>
        </div>

      <div className="row mt-5">
        <div
          className="container col-md-4 bg-light"
          style={{
            color: "grey",
            borderRadius: "25px",
            height: "360px",
            width: "360px",
          }}
        >
          <h2 className="p-2 text-center">Are you a Hospital?</h2>
          <img
            src={HospitalAvatar}
            className="rounded mx-auto d-block mt-4"
            alt="donor image"
            style={{ width: "150px" }}
          />
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <Link
              to="/signup-hospital"
              className=" btn btn-block text-light"
              style={{backgroundColor: "darkred"}}
            >
              Sign Up
            </Link>
            <Link
              to="/signin-hospital"
              className=" btn btn-block text-light"
              style={{backgroundColor: "darkred", margin: "20px"}}
            >
              Login
            </Link>
          </div>
        </div>

        <div
          className="container col-md-4 bg-light"
          style={{
            color: "grey",
            borderRadius: "25px",
            height: "360px",
            width: "360px",
          }}
        >
          <h2 className="p-2 text-center">Are you a Admin?</h2>
          <img
            src={AdminAvatar}
            className="rounded mx-auto d-block mt-4"
            alt="donor image"
            style={{ width: "150px" }}
          />
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <Link
              to="/signin-admin"
              className=" btn btn-block text-light"
              style={{backgroundColor: "darkred", margin: "20px"}}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
  
  export default Home;
