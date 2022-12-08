/** @format */

import React, { Component } from "react";
import { Navigate, useParams } from "react-router-dom";
import { isAuthenticated } from "../auth/userAuth";
import Header from "../components/Header";
import { read, update } from "./apiUser";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class EditProfileUser extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      email: "",
      password: "",
      redirectToProfile: false,
      error: "",
      loading: false,
      bloodType: "",
      lastTimeDonation: "",
    };
  }

  init = (userId) => {
    const token = isAuthenticated().token;
    fetch(`${process.env.REACT_APP_API_URL}/user/user/${userId}`, {
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
            name: data.name,
            email: data.email,
            error: "",
            bloodType: data.bloodType,
            lastTimeDonation: data.lastTimeDonation,
          });
        }
      });
  };

  componentDidMount(params) {
    const userId = this.props.match.params.userId;
    this.init(userId);
  }

  isvalid = () => {
    const { name, email, password, error } = this.state;
    if (name.length == 0) {
      this.setState({ error: "Name is required" });
      return false;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      this.setState({ error: "Email is required/Wrong Format" });
      return false;
    }

    if (password.length >= 1 && password.length <= 5) {
      this.setState({ error: "Password must be at least 6 characters long" });
      return false;
    }
    return true;
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  update = (userId, token, user) => {
    console.log("user DATA: ", user);
    return fetch(`${process.env.REACT_APP_API_URL}/user/user/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${isAuthenticated().token}`,
      },
      body: JSON.stringify(user),
    })
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
        name,
        email,
        password,
        error,
        lastTimeDonation,
        bloodType,
      } = this.state;

      const user = {
        name,
        email,
        password: password || undefined,
        error,
        lastTimeDonation,
        bloodType,
      };

      //console.log(user)

      const userId = this.props.match.params.userId;
      const token = isAuthenticated().token;

      this.update(userId, token, user, error, this.userData).then((data) => {
        if (data.error) {
          this.setState({ error: data.error });
        } else {
          this.setState({
            redirectToProfile: true,
          });
        }
      });
    }
  };

  editForm = (name, email, password, bloodType, lastTimeDonation) => (
    <form>
      <div className="form-group">
        <Header />
        <label>User Name</label>
        <input
          onChange={this.handleChange("name")}
          value={name}
          type="text"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>User Email</label>
        <input
          onChange={this.handleChange("email")}
          value={email}
          type="email"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Blood Type</label>
        <select
          onChange={this.handleChange("bloodType")}
          value={bloodType}
          type="text"
          className="form-control"
        >
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB-">AB-</option>
          <option value="AB+">AB+</option>
        </select>
      </div>

      <div className="form-group">
        <label>Last Time you Donate Blood, if so:</label>
        <input
          onChange={this.handleChange("lastTimeDonation")}
          value={lastTimeDonation}
          type="date"
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
        className="btn btn-raised btn-block"
        style={{ backgroundColor: "rgb(234, 181, 178)" }}
      >
        Update
      </button>
    </form>
  );

  render() {
    const {
      name,
      email,
      password,
      redirectToProfile,
      id,
      error,
      loading,
      bloodType,
      lastTimeDonation,
    } = this.state;

    if (redirectToProfile) {
      return <Navigate to={`/dashboard-user/${id}`} />
    }

    return (
      <div className="container">
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <h2>Edit User Profile</h2>

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

        {this.editForm(name, email, password, bloodType, lastTimeDonation)}
      </div>
    );
  }
}

export default withRouter(EditProfileUser);
