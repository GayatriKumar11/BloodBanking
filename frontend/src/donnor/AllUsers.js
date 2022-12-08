/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import DefaultAvatar from "../images/avatar.png";

class AllUsers extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  list = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/user/users`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  componentDidMount = () => {
    this.list().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ users: data });
      }
    });
  };

  render() {
    const { users } = this.state;
    return (
      <div>
        <p className="text-center">All Users - List - Super Admin use only</p>

        <div className="row mt-5 text-center m-1">
          {/* {JSON.stringify(users)} */}

          {users.map((user, i) => (
            <div className="card col-md-4" key={i}>
              <img
                src={DefaultAvatar}
                className="card-img-top"
                alt="..."
                style={{ width: "100%", heigh: "15vw", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.email}</p>
                <Link
                  to={`/dashboard-user/${user._id}`}
                  className="btn btn-danger"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AllUsers;
