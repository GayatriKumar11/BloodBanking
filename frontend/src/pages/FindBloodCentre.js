import React from 'react';
import $ from 'jquery';
import Header from '../components/Header';
import CountBox from '../components/CountBox';
import { useState, useEffect } from 'react';
import axios from 'axios';

var bankName;

const FindBloodCentre = () => {

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
            addEvent();
        } catch (error) {
            console.log(error);
        }
    };

    // Get selected bank name and set it to bloodbankName
    $('button').on("click", function () {

        bankName = $(this).closest('tr').children('td').first().text();
        setBloodBankName(bankName);
        console.log(bloodBankName);
    });
    
    const fetchBloodBank = () => {
        axios
            .get('http://localhost:8080/bloodbank/getAll')
            .then((res) => {
                console.log(res);
                setBloodBank(res.data);
                console.log(bloodBank);
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

        let result = fetch('http://localhost:8080/pickup/create', {
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

                <table className="table align-middle mb-0 bg-white">
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
                                
                                <td>
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
                                        className="btn btn-link btn-sm btn-rounded"
                                    >
                                        Pick Up Here!
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>

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
                                <input
                                    type="text"
                                    name="bloodCentreName"
                                    className="form-control"
                                    id="bloodCentreName"
                                    placeholder="Blood Bank"
                                    required
                                    value={bloodBankName}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="recieverName"
                                    id="recieverName"
                                    placeholder="Reciever Name"
                                    required
                                    value={recieverName}
                                    onChange={(event) => {
                                        setRecieverName(event.target.value);
                                    }}
                                />
                            </div>
                        </div>

                        <div className="form-group mt-3">
                            <input
                                type="text"
                                className="form-control"
                                name="dateOfPickup"
                                id="dateOfPickup"
                                placeholder="Date Of Pickup"
                                required
                                value={dateOfPickup}
                                onChange={(event) => {
                                    setdateOfPickup(event.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group mt-3">
                            <input
                                type="text"
                                className="form-control"
                                name="bloodType"
                                id="bloodType"
                                placeholder="Blood Type"
                                required
                                value={bloodType}
                                onChange={(event) => {
                                    setbloodType(event.target.value);
                                }}
                            />
                        </div>
                        <br />
                        <div className="text-center"><button className='btn btn-danger' type="submit" onClick={AddPickup}>Confirm Pickup</button></div>
                    </form>

                </div>


            </section>


        </div>
    )
}


export default FindBloodCentre