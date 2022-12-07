import React, { useState } from 'react';
import Header from '../components/Header';
import Axios from 'axios';


const ContactUs = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [msg, setMsg] = useState('');
    const [messageList, setMessageList] = useState([]);

    let AddMessage = async (e) => {
        try {
            e.preventDefault();
            setName("");
            setEmail("");
            setSubject("");
            setMsg("");

            console.log("Adding a new message");
            addEvent();
        } catch (error) {
            console.log(error);
        }
    };

    const addEvent = () => {

        let item = {
            name: name,
            email: email,
            subject: subject,
            msg: msg,
        }

        console.log(item);

        let result = fetch('http://localhost:8080/message/create', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        }).then(res => {
            result = res.json();
            if (res.status == 200) {
                console.log("in If");
                console.log(res);

                setMessageList([
                    ...messageList,
                    {
                        name: name,
                        email: email,
                        subject: subject,
                        msg: msg,
                    },
                ])
            }
        })
    };

    const getAllMessages = () => {
        Axios
            .get("http://localhost:8080/message/getAll").then((response) => {
                setMessageList(response.data);
            });
    };

    return (
        <div>
            <Header />

            <section id="contact" className="contact">
                <div className="container">

                    <br /><br /><br /><br />
                    <div className="section-title">
                        <h2>Hi, have questions?</h2>
                        <p>Feel free to contact us!</p>
                    </div>
                </div>

                <div>
                    <iframe width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=northeastern%20university,boston+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>

                <div className="container">
                    <div className="row mt-5">

                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>360 Huntington Ave, Boston, MA 02115</p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>bloodbanking@example.com</p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 55s</p>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-8 mt-5 mt-lg-0">

                            <form action="" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            required
                                            value={name}
                                            onChange={(event) => {
                                                setName(event.target.value);
                                            }} 
                                            />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input 
                                        type="email" 
                                        className="form-control" 
                                        name="email" 
                                        id="email" 
                                        placeholder="Your Email" 
                                        required 
                                        value={email}
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                        }}
                                        />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    name="subject" 
                                    id="subject" 
                                    placeholder="Subject" 
                                    required 
                                    value={subject}
                                    onChange={(event) => {
                                        setSubject(event.target.value);
                                    }}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea 
                                    className="form-control" 
                                    name="message" 
                                    rows="5" 
                                    placeholder="Message" 
                                    required
                                    value={msg}
                                    onChange={(event) => {
                                        setMsg(event.target.value);
                                    }}
                                    ></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit" onClick={AddMessage}>Send Message</button></div>
                            </form>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default ContactUs