import React from "react";
import { Link } from "react-router-dom";
import DonorImg from "../images/home-user.png";
import HospitalAvatar from "../images/nurse.svg";
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
      <h1 className="text-center" style={{ color: "rgb(166, 72, 77)" }}>
        Welcome to Blood Donation Finder
      </h1>
      <div className="row mt-5">
        <div
          className="container mt-5 col-md-4 bg-light"
          style={{
            color: "gray",
            borderRadius: "25px",
            height: "360px",
            width: "300px",
          }}
        >
          <h2 className="p-2 text-center"> Are you a Donor?</h2>
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
  
        <div
          className="container mt-5 col-md-4 bg-light"
          style={{
            color: "grey",
            borderRadius: "25px",
            height: "360px",
            width: "300px",
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
          className="container mt-5 col-md-4 bg-light"
          style={{
            color: "grey",
            borderRadius: "25px",
            height: "360px",
            width: "300px",
          }}
        >
          <h2 className="p-2 text-center">Are you a Admin?</h2>
          <img
            src={HospitalAvatar}
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
