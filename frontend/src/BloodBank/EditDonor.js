// import React from "react";
// //import { renderMatches, useNavigate, } from 'react-router-dom'
// import { useState } from "react";
// import {dashboard} from './Donor';

// const EditDonor=()=>{


//     //const navigate = useNavigate();
//     const [id, setid] = useState("");
//     const [name, setname] = useState("");
//     const [email, setEmail] = useState("");
//     const [bloodgroup, setbloodgroup] = useState("");
//     const [phonenumber, setphonenumber] = useState("");
//     let [idError, setidError] = useState("");
//     let [nameError, setnameError] = useState("");
//     let [emailError, setemailError] = useState("");
//     let [bloodgroupError, setbloodgroupError] = useState("");
//     let [phonenumberError, setphonenumberError] = useState("");
//     let [MessageError, setMessageError] = useState("");
//     let handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             console.log('handlesubmit')
//             // if (!validate()) {
//                 updatedonor();
//             // }
//         }
//         catch (err) {
//             console.log(err);
//         }
//     };

//     // let validate = () => {

//     //     let emailregex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
//     //     let passwordregex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$/;
//     //     if (email === "" && password === "") {
//     //         console.log("email & password")
//     //         setemailError("email cannot be blank");
//     //         setpasswordError("password can't be blank");
//     //         return true;
//     //     }
//     //     else{
//     //         setemailError(" ");
//     //         setpasswordError(" ");
//     //     }

//     //     if (email === "") {
//     //         console.log("email")
//     //         setemailError("email cannot be blank");
//     //         return true;
//     //     }
//     //     else {

//     //         setemailError(" ")
//     //         if (!emailregex.test(email)) {
//     //             setemailError("please enter valid email");
//     //             return true;

//     //         }
//     //         else{
//     //             setemailError(" ")
//     //         }

//     //     }
//     //     if (password === "") {
//     //         console.log("password")
//     //         setpasswordError("password cannot be blank");
//     //         console.log(passwordError)
//     //         return true;
//     //     }
//     //     else {
//     //         setpasswordError(" ")
//     //         console.log('password clear')
//     //         if (!passwordregex.test(password)) {

//     //             console.log('password regex')
//     //             setpasswordError("enter valid password");
//     //             return true;
//     //         }
//     //         else{
//     //             console.log("password total")
//     //             setemailError(" ");
//     //             setpasswordError(" ");


//     //         }

//     //     }
//     //     //   if (emailError || nameError || passwordError) {
//     //     //     console.log('clear errors')
//     //     //     return false;
//     //     //   }

//     // }


//     let updatedonor = () => {
//         // const navigate = useNavigate();
//         //   console.log(this.props)
//         let item = { id:id, name:name,email: email, bloodgroup:bloodgroup, phonenumber:phonenumber }
//         console.log(item);
//         //   const URL  = "http://localhost:8080/Logintest";
//         //   let result  = axios.post(URL,item).then((res)=>{
//         //     console.log(res);
//         // navigate('/Home');
//         //   }).catch((e)=>{
//         //     console.log(e);
//         // navigate('/Home')
//         //   })
//         let result = fetch('http://localhost:8080/user/edit', {
//             method: 'PUT',
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             body: JSON.stringify(item)


//             //history.push('/Jobs')

//         }).then(res => {
//             result = res.json()
//             //console.log(res)
//             if (res.statusText === "OK") {
//                 console.log('OK')
//                 //navigate('/dashboard');

//             }
//             else {
//                 console.log('Not ok')
//                 // if(!validate())
//                 // {
//                 //     setMessageError(" Please enter details correctly")
//                 //     return false;
//                 // }
//                 // else
//                 // {
//                 //    if(validate()){
//                 //     setMessageError(" ")
//                 //     return true;
//                 //    }
//                 // }

//             }

//         })
//     }


//     return (


//     <div id="form">
//         <div className="App">
//             <form onSubmit={handleSubmit}>
//                 <h1>Edit Donor Form</h1>
//                 <input
//                     type="text"
//                     value={id}
//                     placeholder="id"
//                     onChange={(e) => setid(e.target.value)}
//                 />
//                 <br></br>
//                 <div style={{ fontSize: 12, color: "red" }}>{idError ? <p>{idError}</p> : null}</div>
//                 <br></br>
//                 <input
//                     type="text"
//                     value={name}
//                     placeholder="name"
//                     onChange={(e) => setname(e.target.value)}
//                 />
//                 <br></br>
//                 <div style={{ fontSize: 12, color: "red" }}>{nameError ? <p>{nameError}</p> : null}</div>
//                 <br></br>
//                 <input
//                     type="email"
//                     value={email}
//                     placeholder="Email"
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <br></br>
//                 <div style={{ fontSize: 12, color: "red" }}>{emailError ? <p>{emailError}</p> : null}</div>
//                 <input
//                     type="text"
//                     value={bloodgroup}
//                     placeholder="bloodgroup"
//                     onChange={(e) => setbloodgroup(e.target.value)}
//                 />
//                 <div style={{ fontSize: 12, color: "red" }}>{bloodgroupError ? <p>{bloodgroupError}</p> : null}</div>

//                 <br></br>
//                 <input
//                     type="text"
//                     value={phonenumber}
//                     placeholder="phonenumber"
//                     onChange={(e) => setphonenumber(e.target.value)}
//                 />
//                 <div style={{ fontSize: 12, color: "red" }}>{phonenumberError ? <p>{phonenumberError}</p> : null}</div>
//                 <button type="submit">Submit</button>
//                 <div style={{ fontSize: 12, color: "red" }}>{MessageError ? <p>{MessageError}</p> : null}</div>
//                 <br></br>


//             </form>


//         </div>

//     </div>

//     )

//     }



// export default EditDonor


// class EditDonor extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             email: '',
//             bloodgroup: '',
//             phonenumber: ''
//         }
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(event) {
//         const name = event.target.name;
//         const value = event.target.value;
//         this.setState({
//             [name]: value
//         })

//     }
//     componentDidMount(props) {
//         var donorid = this.props.match.params.id;
//         this.GetEmployeeById(donorid);
//     }
//     GetDonorById(donorid) {
//         const apiUrl = BaseapiUrl + "api/Employee?id=" + Empid;
//         fetch(apiUrl)
//             .then(res => res.json())
//             .then(
//                 (result) => {
//                     debugger;
//                     if (result) {
//                         this.setState({
//                             name: result.name,
//                             email: result.email,
//                             bloodgroup: result.bloodgroup,
//                             phonenumber: result.phonenumber
//                         });
//                     }
//                     else {
//                         alert("donor record not found!")
//                     }
//                 },
//                 (error) => {
//                     this.setState({ IsApiError: true });
//                 }
//             )
//     }

//     UpdateEmployee() {
     

       
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Edit Employee</h1>
//                 <Link variant="primary" to="/">View Employee list</Link>
//                 <Row>
//                     <Col sm={6}>
//                         <Form onSubmit={this.handleSubmit}>
//                             <Form.Group controlId="employeeName">
//                                 <Form.Label>Employee Name</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     name="employeeName"
//                                     value={this.state.employeeName}
//                                     onChange={this.handleChange}
//                                     placeholder="Employee Name" />
//                             </Form.Group>
//                             <Form.Group controlId="employeeSalary">
//                                 <Form.Label>Employee Salary</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     name="employeeSalary"
//                                     value={this.state.employeeSalary}
//                                     onChange={this.handleChange}
//                                     placeholder="Employee Salary" />
//                             </Form.Group>
//                             <Form.Group controlId="employeeAddress">
//                                 <Form.Label>EmployeeAddress</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     name="employeeAddress"
//                                     value={this.state.employeeAddress}
//                                     onChange={this.handleChange}
//                                     placeholder="Address" />
//                             </Form.Group>
//                             <Form.Group>
//                                 <Button variant="success" onClick={() => this.UpdateEmployee()}>Save</Button>
//                             </Form.Group>
//                         </Form>
//                     </Col>
//                 </Row>
//             </div>
//         )

//     }
// }
// export default EditDonor;
