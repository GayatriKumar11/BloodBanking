import React from 'react';
import $ from 'jquery';
import Header from '../components/Header';
import CountBox from '../components/CountBox';
import { useState, useEffect } from 'react';
import axios from 'axios';



const FindBloodCentre = () => {

    var bankName;

    const [bloodBank, setBloodBank] = useState([]);
    const [bloodBankName, setBloodBankName] = useState('');

    const [bloodCentreName, setBloodCentreName] = useState('');
    const [recieverName, setRecieverName] = useState('');
    const [dateOfPickup, setdateOfPickup] = useState('');
    const [bloodType, setbloodType] = useState('');

    const [bloodCentreNameError, setBloodCentreNameError] = useState('');
    const [recieverNameError, setRecieverNameError] = useState('');
    const [dateOfPickupError, setdateOfPickupError] = useState('');
    const [bloodTypeError, setbloodTypeError] = useState('');

    const [pickupList, setPickupList] = useState([]);

    useEffect(() => {
        fetchBloodBank();
    }, []);

    let AddPickup = async (e) => {
        try {
            e.preventDefault();

            setBloodCentreName("");
            setRecieverName("");
            setdateOfPickup("");
            setbloodType("");

            console.log("Adding a new pickup");
            $('.pickup-alert').css("display", "block");
            console.log("bloodCentreName" + bloodCentreName);
            addEvent();
        } catch (error) {
            console.log(error);
        }
    };

    // Get selected bank name and set it to bloodbankName
    $('.pickup-btn').on("click", function () {

        bankName = $(this).closest('tr').children('td').first().text();
        setBloodBankName(bankName);
        setBloodCentreName(bankName);
        console.log("BankNAme var: in $ " + bankName);
    });

    const fetchBloodBank = () => {
        axios
            .get('http://localhost:8000/bloodbank/getAll')
            .then((res) => {
                setBloodBank(res.data);
            })

            .catch((err) => {
                console.log(err);
            });
    };

    // let validate = () => {


    //     if (bloodCentreName === "" && recieverName === "" && dateOfPickup === "" && bloodType === "") {

    //       setbloodCentreNameError("hospital name can't be blank");
    //       setrecieverNameError("zipcode can't be blank");
    //       setdateOfPickupError("blood group can't be blank");
    //       setbloodTypeError("Address cannot be blank");
    //       setMessageError(" ");
    //       return true;
    //     }
    //     else {
    //         setbloodCentreNameError("");
    //         setrecieverNameError("");
    //         setdateOfPickupError("");
    //         setbloodTypeError("");
    //     }

    //     if (bloodCentreName === "" && recieverName === "" && dateOfPickup === "") {
    //       setbloodCentreNameError("hospital name can't be empty")
    //       setrecieverNameError("address can't be empty")
    //       setdateOfPickupError("bloodgroup can't be empty")
    //       return true;

    //     }
    //     else {
    //         setbloodCentreNameError("")
    //         setrecieverNameError("")
    //         setdateOfPickupError("")
    //       if (hospitalname === "" && address === "" && zipcode === "") {
    //         sethospitalnameError("hospital name can't be empty")
    //         setaddressError("address can't be empty")
    //         setzipcodeError("zipcode can't be empty")
    //         return true;
    //       }
    //       else {
    //         sethospitalnameError("")
    //         setaddressError("")
    //         setzipcodeError("")
    //         if (address === "" && zipcode === "" && bloodgroup === "") {
    //           setbloodgroupError("bloodgroup can't be empty")
    //           setaddressError("address can't be empty")
    //           setzipcodeError("zipcode can't be empty")
    //           return true;
    //         }
    //         else {
    //           setbloodgroupError("")
    //           setaddressError("")
    //           setzipcodeError("")
    //           if (hospitalname == "" && bloodgroup == "" && zipcode === "") {
    //             sethospitalnameError("hospital name can't be empty")
    //             setbloodgroupError("blood group can't be empty")
    //             setzipcodeError("zipcode can't be empty")
    //             return true;
    //           }
    //           else {
    //             setbloodgroupError("")
    //             sethospitalnameError("")
    //             setzipcodeError("")
    //           }
    //         }
    //       }
    //     }

    //     if (hospitalname === "" && address === "") {
    //       sethospitalnameError("Hospital Name can't be empty")
    //       setaddressError("Address can't be empty")
    //       return true;
    //     }
    //     else {
    //       sethospitalnameError(" ")
    //       setaddressError(" ")
    //       if (hospitalname === "" && zipcode === "") {
    //         sethospitalnameError("Hospital Name can't be empty")
    //         setzipcodeError("zipcode can't be empty")
    //         return true;
    //       }
    //       else {
    //         sethospitalnameError("")
    //         setzipcodeError("")
    //         if (hospitalname === "" && bloodgroup === "") {
    //           sethospitalnameError("HospitalName can't be empty")
    //           setbloodgroupError("bloodgroup can't be empty")
    //           return true;
    //         }
    //         else {
    //           sethospitalnameError(" ")
    //           setbloodgroupError(" ")
    //           if (address === "" && zipcode === "") {
    //             setaddressError("address can't be empty")
    //             setzipcodeError("zipcode can't be empty")
    //             return true;
    //           }
    //           else {
    //             setaddressError("")
    //             setzipcodeError("")
    //             if (address === "" && bloodgroup === "") {
    //               setaddressError("address can't be empty")
    //               setbloodgroupError("bloodgroup can't be empty")
    //               return true;
    //             }
    //             else {
    //               setaddressError("")
    //               setbloodgroupError("")
    //               if (zipcode == "" && bloodgroup == "") {
    //                 setzipcodeError("zipcode can't be empty")
    //                 setbloodgroupError("bloodgroup can't be empty")
    //                 return true;
    //               }
    //               else {
    //                 setzipcodeError("")
    //                 setbloodgroupError("")
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //     if (address === "") {
    //       setaddressError("Address cannot be blank");
    //       return true;
    //     }
    //     else {

    //       setaddressError(" ")
    //     }
    //     if (hospitalname === "") {
    //       sethospitalnameError("hospital name cannot be blank");
    //       return true;
    //     }
    //     else {
    //       sethospitalnameError(" ")
    //     }
    //     if (bloodgroup === "") {
    //       setbloodgroupError("bloodgroup cannot be blank")
    //       return true;
    //     }
    //     else {
    //       setbloodgroupError("")
    //     }
    //     if (zipcode === "") {
    //       setzipcodeError("zipcode cannot be blank");
    //       return true;
    //     }
    //     else {
    //       setzipcodeError(" ")
    //     }
    //     var zipregex = /(^\d{5}$)|(^\d{5}-\d{4}$)/
    //     if (!zipregex.test(zipcode)) {
    //       console.log('error testing')
    //       setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
    //       return true;
    //     }
    //     setzipcodeError(" ")

    // }



    const addEvent = () => {

        let item = {
            bloodCentrename: bloodCentreName,
            recieverName: recieverName,
            dateOfPickup: dateOfPickup,
            bloodType: bloodType,
        }

        let result = fetch('http://localhost:8000/pickup/create', {
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
                console.log("bloodCentreName" + bloodCentreName);
                
                $(".pickup-alert").css("display", "block");
                
                

                setPickupList([
                    ...pickupList,
                    {
                        bloodCentrename: bloodCentreName,
                        recieverName: recieverName,
                        dateOfPickup: dateOfPickup,
                        bloodType: bloodType,
                    },
                ])
            }
        })


    };

    return (
        <div>
            <Header />

            <div className="container">
                <br /> <br /> <br /> <br /> <br /> <br />

                <div className="section-title">
                    <h2>Find a Blood Centre</h2>
                </div>
            </div>

            <section id="counts" className="counts">

                {/* UI for steps */}
                <div className="container">

                    <div className="row">

                        <CountBox title="Find your convenient Blood Centre" icon="fa fa-hospital" clsNme="col-lg-3 col-md-6 mt-5 mt-md-0" />
                        <CountBox title="Check Availability" icon="fa-solid fa-magnifying-glass-location" clsNme="col-lg-3 col-md-6" />
                        <CountBox title="Fill the Request form" icon="fa-solid fa-rectangle-list" clsNme="col-lg-3 col-md-6 mt-5 mt-lg-0" />
                        <CountBox title="Collect the blood on the given date" icon="fa-solid fa-droplet" clsNme="col-lg-3 col-md-6 mt-5 mt-lg-0" />

                    </div>

                </div>


                <br /> <br /> <br />
                {/* Table with all centres */}
                <div>
                    <table className="table align-middle mb-0 bg-white pickup-table">
                        <thead className="bg-light">
                            <tr>
                                <th>Blood Bank Name</th>
                                <th>Address</th>
                                <th>Zipcode</th>
                                <th>Availability</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {bloodBank.map((item, index) => (
                                <tr key={index}>

                                    <td id="bloodbanknameinTable">
                                        <div className="d-flex align-items-center">
                                            <div className="ms-3">
                                                <p className="fw-bold mb-1">{item.bloodbankname}</p>
                                            </div>
                                        </div>
                                    </td>


                                    <td>{item.address}</td>


                                    <td>{item.zipcode}</td>


                                    <td>
                                        <p className="fw-normal mb-1">{item.bloodgroup}</p>
                                        <p className="text-muted mb-0">{item.quantity} units</p>
                                    </td>


                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-link btn-sm btn-rounded pickup-btn appointment-btn text-decoration-none">
                                            Pick Up Here!
                                        </button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>



                <br /><br />

                <div className="container">
                    <div className="section-title">
                        <p>Please fill in the form below for pickup.</p>
                    </div>
                </div>
                {/* Form for Schedule */}
                <div className="col-lg-8 mt-5 mt-lg-0">

                    <form action="" method="post" role="form" className="php-email-form col-lg-6 offset-lg-6">
                        <div className="row justify-content-center">
                            <div className="form-group mt-3">
                                <label htmlFor="bloodCentreName">Blood Bank Name</label>
                                <input
                                    type="text"
                                    name="bloodCentreName"
                                    className="form-control"
                                    id="bloodCentreName"
                                    required
                                    value={bloodCentreName}
                                    onChange={(event) => {
                                        setBloodCentreName({ bankName });
                                    }}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="recieverName">Reciever Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="recieverName"
                                    id="recieverName"
                                    required
                                    pattern="[a-zA-Z]+"
                                    title="Please Enter Valid Company Name"
                                    value={recieverName}
                                    onChange={(event) => {
                                        setRecieverName(event.target.value);
                                    }}
                                />
                            </div>
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="dateOfPickup">Date Of Pickup</label>

                            <input
                                type="date"
                                className="form-control"
                                name="dateOfPickup"
                                id="dateOfPickup"
                                required
                                value={dateOfPickup}
                                onChange={(event) => {
                                    setdateOfPickup(event.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="bloodType">Blood Type</label>

                            <input
                                type="text"
                                className="form-control"
                                name="bloodType"
                                id="bloodType"
                                required
                                value={bloodType}
                                onChange={(event) => {
                                    setbloodType(event.target.value);
                                }}
                            />
                        </div>
                        <br />
                        <div className="text-center"><button className='btn btn-danger' type="submit" onClick={AddPickup}>Confirm Pickup</button></div>
                        
                        <br/>
                        <div className="alert alert-success pickup-alert" role="alert">
                            Congrats. Your pickup has been Scheduled!
                        </div>
                    </form>

                </div>


            </section>


        </div>
    )
}


export default FindBloodCentre