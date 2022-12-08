import React from 'react'
import { Carousel, Card, Alert, Button, Form, Container } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import './../css/donorLoggedIn.css';
import { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';
import app from "./../images/app.jpg";
import Table from 'react-bootstrap/Table';
var bank_value;
function DonorLogin() {
    const [bloodbankname, setBloodBName] = useState('');
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    //const [msg, setMsg] = useState('');
    const [messageList, setMessageList] = useState([]);
    //select blood b
    const [bank, setBank] = useState([]);
    const [bankValue, setvalue] = useState([]);
    


  let [bbanknameError, setbanknameError] = useState("");
  let [fullnameError, setfullnameError] = useState("");
  let [dateError, setdateError] = useState("");
  let [emailError, setemailError] = useState("");
  let [MessageError, setMessageError] = useState("");

//   
  
    $('.selectbloodb').on("click", function() {

        setvalue($(this).closest('tr').children('td').first().text());
        setBloodBName($(this).closest('tr').children('td').first().text())
        console.log({ bankValue })
        //setvalue(bank_value);
        //console.log(bankValue)


    })
    // $('submit').on("click", function() {

    //     AddMessage();

    // })

    let AddMessage = async (e) => {
        try {

            e.preventDefault();
            setFullName("");
            setBloodBName("");
            setEmail("");
            setDate("");
            addEvent();
            console.log("Adding a new message");
            console.log("bloodCentreName" +  bloodbankname);

        } catch (error) {
            console.log(error);
        }
    };

    const addEvent = () => {
  

        console.log(fullname);
        console.log({ bankValue })
        let item = {

            bloodbankname: bloodbankname,
            fullname: fullname,
            date: date,
            email: email,
        }
        console.log(item);
 
        let result = fetch('http://localhost:8080/appointment/create', {
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
                setMessageList([
                    ...messageList,
                    {
                        bloodbankname: bloodbankname,
                        fullname: fullname,
                        date: date,
                        email: email,
                    },
                ])
            }
            
        })



    };

    const fetchBloodBank = () => {
        axios
            .get('http://localhost:8080/bloodbank/getAll')
            .then((res) => {
                console.log(res);
                //
                setBank(res.data);
            })

            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchBloodBank();
    }, []);

   
    // $('button').on("click", function() {

    //     setvalue($(this).closest('tr').children('td').first().text());
    //     console.log({ bankValue })
    //     //setvalue(bank_value);
    //     //console.log(bankValue)


    // })

    return (
        
        <div class="DonorLoggedIn"><br></br>
        <br></br>
            <Card id="mainDonorCard">

            
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home"> Book an Appointment </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>


                </Container>

            </Navbar>
            <br></br>
            <br></br>
            <br></br>
            <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Book your appointment today!</h1>

    <img src={app} alt="" id="imageBookAppointment"></img>
  </div>
</div>

            <Table striped bordered hover size="sm" class="displayData" id="dd">
                <thead id="headerfordonor">
                    <tr>
                        <th>Name</th>
                        <th> Sponsor </th>

                    </tr>
                </thead>
                <tbody>
                    {bank.map((item, index) => (
                        <tr id="bodydonor" key={index}>
                            <td class="bloodbankvalue">{item.bloodbankname}</td>
                            <td><button className="selectbloodb"> Select Blood Bank </button></td>


                        </tr>

                    ))}
                </tbody>
            </Table>
            
                <form action="" method="post" role="form" className="php-email-form">
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <input
                                type="text"
                                name="fullname"
                                className="form-control"
                                id="fullname"
                                placeholder="Your Full Name"
                                required
                                onChange={(event) => {
                                    setFullName(event.target.value);
                                }}
                            // value={name}
                            // onChange={(event) => {
                            //     setName(event.target.value);
                            // }} 
                            />
                        </div>

                        <div className="col-md-6 form-group">
                            <input
                                type="text"
                                name="bloodbankname"
                                className="form-control"
                                id="bloodbankname"
                                placeholder="Selected Drive"
                                required
                                value={bloodbankname}
                                onChange={(event) => {
                                        setBloodBName({bankValue});
                                    }} 
                            readOnly />



                        </div>
                        <div className="col-md-6 form-group">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                required
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            // value={email}
                            // onChange={(event) => {
                            //     setEmail(event.target.value);
                            // }}
                            />
                        </div>
                    </div>
                    <div className="col-md-6 form-group">
                        <input
                            type="date"
                            className="form-control"
                            name="date"
                            id="date"
                            placeholder="Subject"
                            required
                            // value={subject}
                            // onChange={(event) => {
                            //     setSubject(event.target.value);
                            // }}
                            onChange={(event) => {
                                setDate(event.target.value);
                            }}
                        />
                    </div>

                    <div className="my-3">

                        <div className="error-message"></div>
                        <div className="sent-message"> Please enter your details to book an appointment! Thank you!</div>
                    </div>
                    <div className="text-center"><button class="fill" onClick={AddMessage} type="submit">Submit button</button></div>
                    <br></br>
                    <br></br></form>
                    <br></br>
                    <br></br>s
                            <br></br>
                            <br></br>
                            <br>
                            </br><br></br>
                            <br></br>
                            <br>
                            </br>
                            </Card>
        </div>
    )
}

export default DonorLogin
