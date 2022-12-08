import React, { Component } from "react";
import { forgotPassword } from "../auth";
import Header from "../components/Header";
 
class ForgotPassword extends Component {
    state = {
        email: "",
        message: "",
        error: ""
    };
 
    forgotPassword = e => {
        e.preventDefault();
        this.setState({ message: "", error: "" });
        forgotPassword(this.state.email).then(data => {
            if (data.error) {
                console.log(data.error);
                this.setState({ error: data.error });
            } else {
                console.log(data.message);
                this.setState({ message: data.message });
            }
        });
    };
 
    render() {
        return (
            
            <div className="container">
                <Header />
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <h2 className="mt-5 mb-5">Ask for Password Reset</h2>
 
                {this.state.message && (
                    <h4 className="text-info">{this.state.message}</h4>
                )}
                {this.state.error && (
                    <h4 className="text-dark">{this.state.error}</h4>
                )}
 
                <form>
                    <div className="form-group mt-5">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Your email address"
                            value={this.state.email}
                            name="email"
                            onChange={e =>
                                this.setState({
                                    email: e.target.value,
                                    message: "",
                                    error: ""
                                })
                            }
                            autoFocus
                        />
                    </div>
                    <br></br>
                    <button
                        onClick={this.forgotPassword}
                        className="btn btn-raised btn-danger"
                    >
                        Send Password Rest Link
                    </button>
                </form>
            </div>
        );
    }
}
 
export default ForgotPassword;