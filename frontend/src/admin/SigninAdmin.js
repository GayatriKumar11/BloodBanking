import React, { Component } from "react";
import { Navigate, Link } from "react-router-dom";
import { isAuthenticated } from "../auth/adminAuth";

class SigninAdmin extends Component {
  constructor() {
    super();
    this.state = {
      adminEmail: "",
      password: "",
      error: "",
      Navigate: false,
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
    const { adminEmail, password } = this.state;
    const admin = {
      adminEmail: adminEmail,
      password: password,
    };
    console.log(admin);

    this.signin(admin).then((data) => {
      if (data.error) {
        this.setState({ error: data.error, loading: false });
      } else {
        //authenticate
        this.authenticate(data, () => {
          //Navigate
          this.setState({ Navigate: true });
        });
      }
    });
  };

  signin = (admin) => {
    return fetch(`http://localhost:8000/api/auth/admin-signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(admin),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { adminEmail, password, error, Navigate, loading } = this.state;

    if (Navigate) {
      return (
        <Navigate
          to={`/dashboard-admin/${isAuthenticated().admin._id}`}
        />
      );
    }

    return (
      <div className="container">
        <h1>SignIn admin</h1>

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
            <label>Email</label>
            <input
              onChange={this.handleChange("adminEmail")}
              value={adminEmail}
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
            className="btn btn-raised  btn-block"
            style={{ backgroundColor: "rgb(234, 181, 178)" }}
          >
            Login
          </button>
        </form>
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

export default SigninAdmin;