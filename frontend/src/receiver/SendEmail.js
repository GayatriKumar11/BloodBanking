import React, {Component} from "react";
import {Link} from 'react-router-dom'
//import nodemailer from "nodemailer"
import { sendEmail } from "../auth";

class SendEmail extends Component {
  state = {
    name:"",
    email: "",
    phone: "",
    message: "",
    error: "",
    open: false
  }

  sendEmail = e => {
    e.preventDefault();
    this.setState({ name:"", email:"", phone: "", message: "", error: "", open: true }); //clean the fields after send the email
    sendEmail( this.state.name, this.state.email,  this.state.phone, this.state.message );
  }

  contactForm = (name, email, phone, message) => (

    <form method="POST" action="sendemail">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <input className="form-control" name="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." value={this.state.name} onChange={e =>
                this.setState({
                    name: e.target.value,
                    message: "",
                    error: ""
                })
            } />
            <p className="help-block text-danger"></p>
          </div>
          <div className="form-group">
            <input className="form-control" name="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." value={this.state.email} onChange={e =>
                this.setState({
                    email: e.target.value,

                    error: ""
                })
            }/>
            <p className="help-block text-danger"></p>
          </div>
          <div className="form-group">
            <input className="form-control" name="phone" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." value={this.state.phone} onChange={e =>
                this.setState({
                    phone: e.target.value,

                    error: ""
                })
            } />
            <p className="help-block text-danger"></p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <textarea className="form-control" name="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message." value={this.state.message} onChange={e =>
                this.setState({
                    message:e.target.value,

                    error: ""
                })
            }></textarea>
            <p className="help-block text-danger"></p>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="col-lg-12 text-center">
          <div id="success"></div>

          <button id="sendMessageButton" className="btn btn-danger btn-xl text-uppercase" onClick={this.sendEmail}>Send Message</button>

        </div>
      </div>
    </form>
  )

  render(){
    const { name, email, phone, message, error, open} = this.state;
    return(
      <div>
        <section className="page-div" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="div-heading text-uppercase mt-1" style={{color: "white"}}>Contact Me</h2>
                <h3 className="div-subheading contact-subhead mb-3">Will be a pleasure hearing from you :)</h3>
              </div>
            </div>
            <div className="row">

              <div className="col-lg-12">

              <div className="alert alert-danger" style={{display: error ? "": "none"}}>
                {error}
              </div>

              <div className="alert alert-info" style={{ display: open ? "" : "none" }}>
                  Send Email  - We will be in touch soon.

              </div>

              {this.contactForm(name, email, phone, message, error)}

              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }

};

export default SendEmail;
