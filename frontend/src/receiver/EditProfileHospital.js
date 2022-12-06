/** @format */

import React, { Component } from "react";
import { Navigate, useParams } from "react-router-dom";
import { isAuthenticated } from "../auth/hospitalAuth";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class EditProfileHospital extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      hospitalName: "",
      hospitalEmail: "",
      address: "",
      personName: "",
      personEmail: "",
      password: "",
      redirectToProfile: false,
      error: "",
      loading: false,
    };
  }

  init = (hospitalId) => {
    const token = isAuthenticated().token;
    fetch(`${process.env.REACT_APP_API_URL}/hospital/hospital/${hospitalId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${isAuthenticated().token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          this.setState({ redirectToProfile: true });
          //console.log('ERROR FETCHING')
        } else {
          // console.log(data)
          this.setState({
            id: data._id,
            hospitalName: data.hospitalName,
            hospitalEmail: data.hospitalEmail,
            address: data.address,
            personName: data.personName,
            personEmail: data.personEmail,
            error: "",
          });
        }
      });
  };

  componentDidMount() {
    const hospitalId = this.props.match.params.hospitalId;
    this.init(hospitalId);
  }

  isvalid = () => {
    const {
      hospitalName,
      hospitalEmail,
      password,
      address,
      personName,
      personEmail,
      error,
    } = this.state;
    if (hospitalName.length == 0) {
      this.setState({ error: "Name is required" });
      return false;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(hospitalEmail)) {
      this.setState({ error: "Email is required/Wrong Format" });
      return false;
    }
    if (address.length == 0) {
      this.setState({ error: "Address is required" });
      return false;
    }
    if (personName.length == 0) {
      this.setState({ error: "Contact Person Name is required" });
      return false;
    }
    if (password.length >= 1 && password.length <= 5) {
      this.setState({ error: "Password must be at least 6 characters long" });
      return false;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(personEmail)) {
      this.setState({ error: "Contact Person Email is required/Wrong Format" });
      return false;
    }
    return true;
  };

  handleChange = (name) => (event) => {
    // this.setState({ error: "" });
    // const value = name === 'photo'  ? event.target.files[0] : event.target.value
    // this.userData.set(name, value)
    this.setState({ [name]: event.target.value });
  };

  update = (hospitalId, token, hospital, userData) => {
    console.log("HOSPITAL DATA: ", hospital);
    return fetch(
      `${process.env.REACT_APP_API_URL}/hospital/hospital/${hospitalId}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${isAuthenticated().token}`,
        },
        body: JSON.stringify(hospital),
      }
    )
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  clickSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true });

    if (this.isvalid()) {
      const {
        hospitalName,
        hospitalEmail,
        password,
        address,
        personName,
        personEmail,
        error,
      } = this.state;
      const hospital = {
        hospitalName,
        hospitalEmail,
        address,
        personName,
        personEmail,
        password: password || undefined,
        error,
      };

      //console.log(hospital)

      const hospitalId = this.props.match.params.hospitalId;
      const token = isAuthenticated().token;

      this.update(hospitalId, token, hospital, error, this.userData).then(
        (data) => {
          if (data.error) {
            this.setState({ error: data.error });
          } else {
            this.setState({
              redirectToProfile: true,
            });
          }
        }
      );
    }
  };

  editForm = (
    hospitalName,
    address,
    hospitalEmail,
    personName,
    personEmail,
    password,
    bloodType,
    lastTimeDonation
  ) => (
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
        className="btn btn-raised btn-block "
        style={{ backgroundColor: "rgb(234, 181, 178)" }}
      >
        Update
      </button>
    </form>
  );

  render() {
    const {
      hospitalName,
      address,
      hospitalEmail,
      personName,
      personEmail,
      password,
      redirectToProfile,
      id,
      error,
      loading,
    } = this.state;

    if (redirectToProfile) {
      return <Navigate to={`/dashboard-hospital/${id}`} />;
    }

    return (
      <div className="container">
        <h2>Edit Hospital Profile</h2>

        {/* ERROR MESSAGE **************************** */}
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

        {this.editForm(
          hospitalName,
          address,
          hospitalEmail,
          personName,
          personEmail,
          password
        )}
      </div>
    );
  }
}

export default withRouter(EditProfileHospital);
