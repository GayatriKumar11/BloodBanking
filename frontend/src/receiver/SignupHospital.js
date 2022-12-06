import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignupHospital extends Component {
  constructor() {
    super();
    this.state = {
      hospitalName: "",
      hospitalEmail: "",
      password: "",
      address: "",
      personName: "",
      personEmail: "",
      error: "",
      success: false,
    };
  }

  handleChange = (name) => (event) => {
    this.setState({ error: "" });
    this.setState({ [name]: event.target.value });
  };

  clickSubmit = (event) => {
    event.preventDefault(); //not reload the page
    const {
      hospitalName,
      hospitalEmail,
      password,
      address,
      personName,
      personEmail,
    } = this.state;
    const hospital = {
      //create a new hospital user
      hospitalName: hospitalName,
      hospitalEmail: hospitalEmail,
      password: password,
      address: address,
      personName: personName,
      personEmail: personEmail,
    };
    console.log(hospital);

    this.signup(hospital)
      //If we have error, populate the state with that error and display to the user:
      .then((data) => {
        if (data.error) {
          this.setState({ error: data.error });
        } else {
          this.setState({
            hospitalName: "",
            hospitalEmail: "",
            password: "",
            address: "",
            personName: "",
            personEmail: "",
            error: "",
            success: true,
          });
        }
      });
  };

  signup = (hospital) => {
    return fetch(`http://localhost:8000/api/auth/hospital-signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hospital),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  render() {
    const {
      hospitalName,
      hospitalEmail,
      personName,
      personEmail,
      address,
      password,
      error,
      success,
    } = this.state;
    return (
      <div className="container">
        <h1>SignUp Hospital</h1>

        {/* DISPLAY MESSAGE ERROR / SSUCCESS: **************************** */}

        <div
          className="alert alert-danger"
          style={{ display: error ? "" : "none" }}
        >
          {/* {this.state.error} */}
          {error}
        </div>

        <div
          className="alert alert-success"
          style={{ display: success ? "" : "none" }}
        >
          New account is successfully created :)
          <Link className="text-center" to="/signin-hospital">
            {" "}
            Please login HERE.
          </Link>
        </div>

        <form>
          <div className="form-group">
            <label>Hospital Name</label>
            <input
              onChange={this.handleChange("hospitalName")}
              value={hospitalName}
              type="text"
              className="form-control"
            />
          </div>

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
            <label>Hospital Address</label>
            <input
              onChange={this.handleChange("address")}
              value={address}
              type="text"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Contact Person Name</label>
            <input
              onChange={this.handleChange("personName")}
              value={personName}
              type="text"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Contact Person Email</label>
            <input
              onChange={this.handleChange("personEmail")}
              value={personEmail}
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

          <button
            onClick={this.clickSubmit}
            style={{ backgroundColor: "rgb(234, 181, 178)" }}
            className="btn btn-block"
          >
            SignUp
          </button>
        </form>
      </div>
    );
  }
}

export default SignupHospital;