import React from "react";
import { Link, useLocation } from "react-router-dom";

export function withRouter(Children) {
  return (props) => {
    const history = { location: useLocation() };
    return <Children {...props} history={history} />
  }
}

const isActive = (history, path) => {
  if (history.location.pathname === path) return { color: "black" };
  else return { color: "black" };
};

export const signout = (next) => {
  if (typeof window !== "undefined") localStorage.removeItem("jwt");
  next();
  return fetch(`http://localhost:8000/api/auth/signout`, {
    method: "GET",
  })
    .then((response) => {
      console.log("signout", response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

const Header = ({ history }) => {
  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">

          <h1 className="logo me-auto"><a href="/">Blood Banking</a></h1>


          <nav id="navbar" className="navbar order-last order-lg-0">
            {!isAuthenticated().user && (
              <>
                <ul>
                  <li><a className="nav-link scrollto" href="/">Home</a></li>
                  <li><a className="nav-link scrollto" href="/#about">About</a></li>
                  <li><a className="nav-link scrollto" href="/#services">Types of Donation</a></li>
                  <li><a className="nav-link" href="/donor-eligibility">Donor Eligibility</a></li>
                  <li><a className="nav-link" href="/contact">Contact</a></li>
                  <li><a className="nav-link" href="/signupsignin">Signup/Login</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
              </>
            )}

            {isAuthenticated().user && (
              <>
                <Link
                  className="nav-item nav-link m-2"
                  to={`/dashboard-user/${isAuthenticated().user._id}`}
                  style={isActive(history, `/dashboard-user/${isAuthenticated().user._id}`)}
                >
                  My Profile
                </Link>

                <Link
                  className="nav-item nav-link m-2"
                  to="/BookAppointment"
                  style={isActive(history, "/BookAppointment")}
                >
                  Donate Blood
                </Link>



                <Link
                  to="/"
                  onClick={() => signout(() => history.push("/"))}
                  className="nav-item nav-link m-2"
                  style={{ cursor: "pointer", color: "black" }}
                >
                  Sign Out
                </Link>
              </>
            )}

            {isAuthenticated().admin && (
              <>

                <Link
                  className="nav-item nav-link m-2"
                  to={`/dashboard-admin/${isAuthenticated().admin._id}`}
                  style={isActive(history, `/dashboard-admin/${isAuthenticated().admin._id}`)}
                >
                </Link>

                <Link
                  to="/"
                  onClick={() => signout(() => history.push("/"))}
                  className="nav-item nav-link"
                  style={{ cursor: "pointer", color: "black" }}
                >
                  SignOut
                </Link>
              </>
            )}

            {isAuthenticated().hospital && (
              <>

                <Link
                  className="nav-item nav-link m-2"
                  to="/findbloodcenter"
                  style={isActive(history, "/findbloodcenter")}
                >
                  Find a Blood Center
                </Link>
                <Link
                  to="/"
                  onClick={() => signout(() => history.push("/"))}
                  className="nav-item nav-link"
                  style={{ cursor: "pointer", color: "black" }}
                >
                  SignOut
                </Link>
              </>
            )}
          </nav>

          <a href="/MakeADonation" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make a</span> Donation</a>

        </div>
      </header>
    </>
  )
}
export default withRouter(Header);