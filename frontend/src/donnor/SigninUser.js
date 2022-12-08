import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { isAuthenticated } from "../auth/userAuth";
import Header from "../components/Header";

class SignInUser extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
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
    event.preventDefault(); //not reload the page
    this.setState({ loading: true });
    const { email, password } = this.state;
    const user = {
      //create a new user
      email: email,
      password: password,
    };
    //console.log(user)

    this.signin(user)
      //If we have error, populate the state with that error and display to the user:
      .then((data) => {
        if (data.error) {
          this.setState({ error: data.error, loading: false });
        } else {
          this.authenticate(data, () => {
            this.setState({ redirect: true });
          });
        }
      });
  };

  signin = (user) => {
    return fetch(`http://localhost:8000/api/auth/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  signinForm = (email, password) => (
    <form>
      <div>
        <Header />
        <label>Email</label>
        <input
          onChange={this.handleChange("email")}
          value={email}
          type="email"
          className="form-control"
        />
      </div>

      <div>
        <label>Password</label>
        <input
          onChange={this.handleChange("password")}
          value={password}
          type="password"
          className="form-control"
        />
      </div>
      <br />
      <button
        onClick={this.clickSubmit}
        className="btn btn-raised btn-block"
        style={{ backgroundColor: "rgb(234, 181, 178)" }}
      >
        Login
      </button>
    </form>
  );

  render() {
    const { email, password, error, redirect, loading } = this.state;

    if (redirect) {
      return <Navigate to={`/dashboard-user/${isAuthenticated().user._id}`} />;
    }

    return (
      <div className="container">
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <h1>Sign in</h1>

        {/* DISPLAY MESSAGE ERROR / SSUCCESS: ***************************** */}

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

        {this.signinForm(email, password)}
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

export default SignInUser;
