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
  else return { color: "white" };
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

const Nav = ({ history }) => (
  <div>
    <nav>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
   
          {/* Use a not Link because we are  not trying to navigate the user to any other component */}

          {isAuthenticated().user && (
            <>
              <Link
                className="nav-item nav-link"
                to={`/dashboard-user/${isAuthenticated().user._id}`}
                style={isActive(history, `/dashboard-user/${isAuthenticated().user._id}`)}
              >
                My USER Profile
              </Link>

              <Link
                className="nav-item nav-link"
                to="/find-people"
                style={isActive(history, "/find-people")}
              >
                Find People to Follow
              </Link>

              <Link
                className="nav-item nav-link"
                to="/all-users"
                style={isActive(history, "/all-users")}
              >
                All Users
              </Link>

              <Link
                to=""
                onClick={() => signout(() => history.push("/"))}
                className="nav-item nav-link"
                style={{ cursor: "pointer", color: "white" }}
              >
                SignOut
              </Link>
            </>
          )}

          {isAuthenticated().hospital && (
            <>
              <Link
                className="nav-item nav-link"
                to={`/dashboard-hospital/${isAuthenticated().hospital._id} `}
                style={isActive(
                  history,
                  `/dashboard-hospital/${isAuthenticated().hospital._id} `
                )}
              >
                My Profile
              </Link>

              <Link
                className="nav-item nav-link"
                to={`/dashboard-hospital/${isAuthenticated().hospital._id}/needblood `}
                style={isActive(
                  history,
                  `/dashboard-hospital/${isAuthenticated().hospital._id}/needblood `
                )}
              >
                Need Blood
              </Link>

              <Link
                to=""
                onClick={() => signout(() => history.push("/"))}
                className="nav-item nav-link"
                style={{ cursor: "pointer", color: "white" }}
              >
                SignOut
              </Link>
            </>
          )}

          {isAuthenticated().admin && (
            <>
              <Link
                to=""
                onClick={() => signout(() => history.push("/"))}
                className="nav-item nav-link"
                style={{ cursor: "pointer", color: "white" }}
              >
                SignOut
              </Link>
            </>
          )}  
        </div>
      </div>
    </nav>
    {/* {JSON.stringify(props.history)} */}
  </div>
);

export default withRouter(Nav);
