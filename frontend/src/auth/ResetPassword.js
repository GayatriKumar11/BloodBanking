import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { resetPassword } from "../auth";

export function withRouter(Children) {
    return (props) => {
      const match = { params: useParams() };
      return <Children {...props} match={match} />
    }
}
 
class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPassword: "",
            message: "",
            error: ""
        };
    }
 
    resetPassword = e => {
        e.preventDefault();
        this.setState({ message: "", error: "" });
 
        resetPassword({
            newPassword: this.state.newPassword,
            resetPasswordLink: this.props.match.params.resetPasswordToken
        }).then(data => {
            if (data.error) {
                console.log(data.error);
                this.setState({ error: data.error });
            } else {
                console.log(data.message);
                this.setState({ message: data.message, newPassword: "" });
            }
        });
    };
 
    render() {
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Reset your Password</h2>
 
                {this.state.message && (
                    <h4 className="text-info">{this.state.message}</h4>
                )}
                {this.state.error && (
                    <h4 className="text-info">{this.state.error}</h4>
                )}
 
                <form>
                    <div className="form-group mt-5">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Your new password"
                            value={this.state.newPassword}
                            name="newPassword"
                            onChange={e =>
                                this.setState({
                                    newPassword: e.target.value,
                                    message: "",
                                    error: ""
                                })
                            }
                            autoFocus
                        />
                    </div>
                    <button
                        onClick={this.resetPassword}
                        className="btn btn-raised btn-danger"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        );
    }
}
 
export default withRouter(ResetPassword);
