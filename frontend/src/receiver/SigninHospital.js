/** @format */

import React, { Component } from "react";
import { Navigate, Link } from "react-router-dom";
import { isAuthenticated } from "../auth/hospitalAuth";
import Header from "../components/Header";

class SigninHospital extends Component {
  constructor() {
    super();
    this.state = {
      hospitalEmail: "",
      password: "",
      error: "",
      redirect: false,
      loading: false,
    };
  }

  handleChange = (name) => (event) => {
    this.setState({ error: "" });
    this.setState({ [name]: event.target.value });
  };

  authenticate(jwt, next) {
    //when a component is renderirng, the windon could NOT be available, make sure it is:
    if (typeof window !== "undefined") {
      localStorage.setItem("jwt", JSON.stringify(jwt));
      next();
    }
  }

  clickSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const { hospitalEmail, password } = this.state;
    const hospital = {
      hospitalEmail: hospitalEmail,
      password: password,
    };
    console.log(hospital);

    this.signin(hospital).then((data) => {
      if (data.error) {
        this.setState({ error: data.error, loading: false });
      } else {
        //authenticate
        this.authenticate(data, () => {
          //redirect
          this.setState({ redirect: true });
        });
      }
    });
  };

  signin = (hospital) => {
    return fetch(`http://localhost:8000/api/auth/hospital-signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hospital),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { hospitalEmail, password, error, redirect, loading } = this.state;

    if (redirect) {
      return (
        <Navigate
          to={`/dashboard-hospital/${isAuthenticated().hospital._id}`}
        />
      );
    }

    return (
      <div className="container">
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Header />
        <h1>Sign In</h1>

        {/* DISPLAY MESSAGE ERROR / SSUCCESS: **************************** */}

        <div
          className="alert alert-danger"
          style={{ display: error ? "" : "none" }}
        >
          {/* {this.state.error} */}
          {error}
        </div>

        {/* DISPLAY LOADING SPIN: **************************** */}
        {loading ? (
          <div className="jumbotron text-center">
            <h2>Loading......</h2>
          </div>
        ) : (
          ""
        )}

        <form>
          <div className="form-group">
            <label>Hospital Email</label>
            <input
              onChange={this.handleChange("hospitalEmail")}
              value={hospitalEmail}
              type="email"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              onChange={this.handleChange("password")}
              value={password}
              type="password"
              className="form-control"
            />
          </div>
          <br></br>
          <button
            onClick={this.clickSubmit}
            className="btn btn-raised  btn-block"
            style={{ backgroundColor: "rgb(234, 181, 178)" }}
          >
            Login
          </button>
        </form>
        <br></br>
        <p>
        <Link to="/forgot-password" className="text-danger">
            {" "}
            Forgot Password
        </Link>
        </p>
      </div>
    );
  }
}

export default SigninHospital;
