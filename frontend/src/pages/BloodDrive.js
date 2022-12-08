import React from 'react';
import $ from 'jquery';
import {Carousel,Card,Alert,Button,Form} from "react-bootstrap";
import bloodDriveone from "./../images/bloodDriveone.png";
import bloodDrivetwo from "./../images/bloodDrivetwo.jpg";
import bloodDrivethree from "./../images/bloodDrivethree.jpg";
import {useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import './../css/bloodDrive.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Payment from './Payment';
var first_text;

function BloodDrive() {
    const [drive, setdrive] = useState([]);
    const [drivevalue, setvalue] = useState([]);
  useEffect(() => {
    fetchdrive();
  }, []);

$('button').on("click",function() {
    
    first_text = $(this).closest('tr').children('td').first().text();

    setvalue(first_text);

});

const navigate = useNavigate()

    const handleSubmit = event => {
        // event.preventDefault();
    
        // 👇️ redirect to /contacts
        navigate('/payment');}



  const fetchdrive = () => {
    axios
      .get('http://localhost:8080/drive/getAll')
      .then((res) => {
        console.log(res);
        setdrive(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
        <Header />
        
       <Carousel controls={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={bloodDriveone}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>DID YOU KNOW?</h3>
          <p> You can donate whole blood <strong> every 56 days </strong>—and we encourage you to donate as often as possible. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={bloodDrivetwo}
          alt="Second slide"
        />

        <Carousel.Caption>

          <p> More than 38,000 blood donations are needed every day in the US alone</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={bloodDrivethree}
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
    <div class="back">
        <div >

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Card id="textAlertalertMessageBloodDrive" >
    <Alert variant="success">
      <Alert.Heading id="headingFor">Hey, nice to see you! </Alert.Heading>
      <p id="headingForOne">
        Below are the list of drives that are being held. In case you want to sponsor whole or part of a blood drive , please 
        enter your details below and you will be directed to a payment gateaway! 
      </p>
      <hr />
      <p className="mb-0" id="headingForTwo">
      <strong> Remember </strong> , you are helping save lives!
        Every penny counts.
      </p>
    </Alert>
    </Card>
    <br></br>
    <br></br>
    <br></br>
    </div>

            <Table striped bordered hover size="sm" class="displayData" variant="dark">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Zipcode</th>
                  <th> Sponsor </th>

                </tr>
              </thead>
              <tbody>
                {drive.map((item, index) => (
                  <tr key={index}>
                    <td class="tdvalue">{item.name}</td>

                    <td>{item.address}</td>

                    <td>{item.zipcode}</td>

                    <td><button> Sponsor </button></td>


                  </tr>
                ))}
              </tbody>
            </Table>

            <br></br>    <br></br>    <br></br>    <br></br>
        <Card id="cc">
          <h2> Sponsor any Blood Drive </h2>
       

        
        <br></br>
        <Form id="mf">
      <Form.Group>
          <Form.Label className="flabel">Blood Drive to be Sponsored </Form.Label>
          <Form.Control type="text" id="updateValue"
                        placeholder="Selected Drive" value={drivevalue} readOnly/>
                        
        </Form.Group>
        <Form.Group>
        <Form.Label  className="flabel"> Enter your full name </Form.Label>
        <Form.Control type="text"
                        placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group>
          <Form.Label  className="flabel">Enter your email address:</Form.Label>
          <Form.Control type="email" 
                        placeholder="Enter your your email address" />
        </Form.Group>
        <Form.Group>
          <Form.Label  className="flabel" id="fl1">Enter the amount you want to sponsor for/donate </Form.Label>
          <Form.Control type="number" placeholder="Enter amount" />
        </Form.Group>
        <br></br>
        <Button variant="primary" type="submit" className='btn btn-danger'onClick={handleSubmit} >
           Click here to submit form
        </Button>
      </Form>
      </Card>
      <Footer />
    </div>
   

    </div>


  )
}

export default BloodDrive;
