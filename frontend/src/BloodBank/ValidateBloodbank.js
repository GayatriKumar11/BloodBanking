// // const [bloodbankname, setbloodbankname] = useState("");
// // const [address, setaddress] = useState("");
// // const [zipcode, setzipcode] = useState("");
// // const [bloodgroup, setbloodgroup] = useState("");
// // const [quantity, setquantity] = useState("");
// // const [inventoryList, setinventoryList] = useState([]);
// // const [newquantity, setnewquantity] = useState("");
// // const [newbloodgroup, setnewbloodgroup] = useState("");
// // let [addressError, setaddressError] = useState("");
// // let [zipcodeError, setzipcodeError] = useState("");
// // let [bloodbanknameError, setbloodbanknameError] = useState("");
// // let [bloodgroupError, setbloodgroupError] = useState("");
// // let [newbloodgroupError, setnewbloodgroupError] = useState("");
// // let [newquantityError, setnewquantityError] = useState("");
// // let [quantityError, setquantityError] = useState("");
// // let [MessageError, setMessageError] = useState("");
// // var zipregex = /(^\d{5}$)|(^\d{5}-\d{4}$)/
// let validate = () => {


//     if (bloodgroup === "" && zipcode === "" && address === "" && bloodbankname === "" && quantity === "") {

//         setbloodbanknameError("Bloodbank name can't be blank");
//         setzipcodeError("zipcode can't be blank");
//         setbloodgroupError("blood group can't be blank");
//         setaddressError("Address cannot be blank");
//         setquantityError("Quantity cannot be blank");
//         setMessageError(" ");
//         return true;
//     }
//     else {
//         setbloodbanknameError("");
//         setzipcodeError("");
//         setbloodgroupError("");
//         setaddressError("");
//         setquantityError("");

//     }

//     if (bloodbankname === "" && address === "" && zipcode === "" && bloodgroup === "") {
//         setbloodbanknameError("Bloodbank name can't be blank");
//         setzipcodeError("zipcode can't be blank");
//         setbloodgroupError("blood group can't be blank");
//         setaddressError("Address cannot be blank");
//         if (!zipregex.test(zipcode)) {
//             setbloodbanknameError("Bloodbank name can't be blank");
//             setzipcodeError("zipcode can't be blank");
//             setbloodgroupError("blood group can't be blank");
//             setaddressError("Address cannot be blank");
//             setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//             return true;
//         }

//     }
//     else {
//         setbloodbanknameError("");
//         setzipcodeError("");
//         setbloodgroupError("");
//         setaddressError("");
//         setzipcodeError("")

//         if (bloodbankname === "" && address === "" && zipcode === "" && quantity === "") {
//             setbloodbanknameError("Bloodbank name can't be blank");
//             setzipcodeError("zipcode can't be blank");
//             setaddressError("Address cannot be blank");
//             setquantityError("Quantity cannot be blank");
//             if (!zipregex.test(zipcode)) {
//                 setbloodbanknameError("Bloodbank name can't be blank");
//                 setzipcodeError("zipcode can't be blank");
//                 setaddressError("Address cannot be blank");
//                 setquantityError("Quantity cannot be blank");
//                 setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//                 return true;
//             }

//         }
//         else {
//             setbloodbanknameError("");
//             setzipcodeError("");
//             setaddressError("");
//             setquantityError("");
//             setzipcodeError("");

//             if (bloodbankname === "" && address === "" && bloodgroup === "" && quantity === "") {

//                 setbloodbanknameError("Bloodbank name can't be blank");
//                 setbloodgroupError("blood group can't be blank");
//                 setaddressError("Address cannot be blank");
//                 setquantityError("Quantity cannot be blank");
//                 if (!zipregex.test(zipcode)) {

//                     setbloodbanknameError("Bloodbank name can't be blank");
//                     setbloodgroupError("blood group can't be blank");
//                     setaddressError("Address cannot be blank");
//                     setquantityError("Quantity cannot be blank");
//                     setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//                     return true;
//                 }
//             }
//             else {
//                 setbloodbanknameError("");
//                 setbloodgroupError("");
//                 setaddressError("");
//                 setquantityError("");
//                 setzipcodeError("")

//                 if (bloodbankname === "" && zipcode === "" && bloodgroup === "" && quantity === "") {

//                     setbloodbanknameError("Bloodbank name can't be blank");
//                     setzipcodeError("zipcode cannott be blank");
//                     setbloodgroupError("Address cannot be blank");
//                     setquantityError("Quantity cannot be blank");
//                     if (!zipregex.test(zipcode)) {


//                         setbloodbanknameError("Bloodbank name can't be blank");
//                         setzipcodeError("zipcode cannott be blank");
//                         setbloodgroupError("Address cannot be blank");
//                         setquantityError("Quantity cannot be blank");
//                         setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//                         return true;
//                     }

//                 }
//                 else {
//                     setbloodbanknameError("");
//                     setzipcodeError("");
//                     setbloodgroupError("");
//                     setquantityError("");
//                     setzipcodeError("")

//                     if (address === "" && zipcode === "" && bloodgroup === "" && quantity === "") {

//                         setquantityError("Quantity cannot be blank");
//                         setzipcodeError("zipcode can't be blank");
//                         setbloodgroupError("blood group can't be blank");
//                         setaddressError("Address can't be blank");
//                         if (!zipregex.test(zipcode)) {


//                             setquantityError("Quantity cannot be blank");
//                             setzipcodeError("zipcode can't be blank");
//                             setbloodgroupError("blood group can't be blank");
//                             setaddressError("Address can't be blank");
//                             setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//                             return true;
//                         }


//                     }
//                     else {
//                         setzipcodeError("");
//                         setbloodgroupError("");
//                         setaddressError("");
//                         setquantityError("");
//                         setzipcodeError("")

//                     }

//                 }
//             }

//         }
//     }

//     if (bloodbankname === "" && address === "" && bloodgroup === "") { //1
//         setbloodbanknameError("bloodbankname can't be empty")
//         setaddressError("address can't be empty")
//         setbloodgroupError("bloodgroup can't be empty")
//         if (!zipregex.test(zipcode)) {
//             setbloodbanknameError("bloodbankname can't be empty")
//             setaddressError("address can't be empty")
//             setbloodgroupError("bloodgroup can't be empty")
//             setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//             return true;
//         }


//     }
//     else {
//         setbloodbanknameError("")
//         setaddressError("")
//         setbloodgroupError("")
//         setzipcodeError("")
//         if (bloodbankname === "" && address === "" && zipcode === "") { //2
//             setbloodbanknameError("bloodbankname can't be empty")
//             setaddressError("address can't be empty")
//             setzipcodeError("zipcode can't be empty")
//             if (!zipregex.test(zipcode)) {
//                 setbloodbanknameError("bloodbankname can't be empty")
//                 setaddressError("address can't be empty")
//                 setzipcodeError("zipcode can't be empty")
//                 setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//                 return true;
//             }
//         }
//         else {
//             setbloodbanknameError("")
//             setaddressError("")
//             setzipcodeError("")
//             if (bloodbankname === "" && address == "" && quantity == "") { //3
//                 setbloodbanknameError(" bloodbankname can't be empty")
//                 setaddressError("address can't be empty")
//                 setquantityError("quantity can't be empty")
//                 if (!zipregex.test(zipcode)) {
//                     setbloodbanknameError(" bloodbankname can't be empty")
//                     setaddressError("address can't be empty")
//                     setquantityError("quantity can't be empty")
//                     setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//                     return true;
//                 }
//             }
//             else {
//                 setbloodbanknameError(" ")
//                 setaddressError("")
//                 setquantityError("")
//                 setzipcodeError("")
//                 if (address === "" && zipcode === "" && bloodgroup === "") { //4
//                     setbloodgroupError("bloodgroup can't be empty")
//                     setaddressError("address can't be empty")
//                     setzipcodeError("zipcode can't be empty")
//                     if (!zipregex.test(zipcode)) {
//                         setbloodgroupError("bloodgroup can't be empty")
//                         setaddressError("address can't be empty")
//                         setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//                         return true;
//                     }

//                 }
//                 else {
//                     setbloodgroupError("")
//                     setaddressError("")
//                     setzipcodeError("")
//                     if (address === "" && zipcode === "" && quantity === "") { //5
//                         setquantityError("quantity can't be empty")
//                         setaddressError("address can't be empty")
//                         setzipcodeError("zipcode can't be empty")
//                         if (!zipregex.test(zipcode)) {
//                             setquantityError("quantity can't be empty")
//                             setaddressError("address can't be empty")
//                             setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//                             return true;
//                         }
//                     }
//                     else {
//                         setquantityError("")
//                         setaddressError("")
//                         setzipcodeError("")
//                         if (bloodbankname == " " && zipcode == "" && quantity == "") { //6
//                             setbloodbanknameError("bloodbank name can't be empty")
//                             setbloodgroupError("blood group can't be empty")
//                             setzipcodeError("zipcode can't be empty")
//                             if (!zipregex.test(zipcode)) {
//                                 setbloodbanknameError("bloodbank name can't be empty")
//                                 setbloodgroupError("blood group can't be empty")
//                                 setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//                                 return true;
//                             }
//                         }
//                         else {
//                             setbloodbanknameError("")
//                             setbloodgroupError("")
//                             setzipcodeError("")
//                             if (bloodbankname === "" && bloodgroup === "" && quantity == "") { //7
//                                 setbloodbanknameError("bloodbank name can't be empty")
//                                 setbloodgroupError("bloodgroup can't be empty")
//                                 setquantityError("quantity can't be empty")
//                                 if (!zipregex.test(zipcode)) {
//                                     setbloodbanknameError("bloodbank name can't be empty")
//                                     setbloodgroupError("bloodgroup can't be empty")
//                                     setquantityError("quantity can't be empty")
//                                     setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//                                     return true;
//                                 }
//                             }
//                             else {
//                                 setbloodbanknameError("")
//                                 setbloodgroupError("")
//                                 setquantityError("")
//                                 setzipcodeError("")
//                                 if (bloodbankname == "" && bloodgroup == "" && zipcode === "") { //8
//                                     setbloodbanknameError("bloodbank name can't be empty")
//                                     setbloodgroupError("blood group can't be empty")
//                                     setzipcodeError("zipcode can't be empty")
//                                     if (!zipregex.test(zipcode)) {
//                                         setbloodbanknameError("bloodbank name can't be empty")
//                                         setbloodgroupError("blood group can't be empty")
//                                         setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//                                         return true;
//                                     }

//                                 }
//                                 else {
//                                     setbloodgroupError("")
//                                     setbloodbanknameError("")
//                                     setzipcodeError("")
//                                     if (zipcode === "" && bloodgroup === "" && quantity === "") { //9
//                                         setbloodgroupError("blood group can't be empty")
//                                         setquantityError("quantity can't be empty")
//                                         setzipcodeError("zipcode can't be empty")
//                                         if (!zipregex.test(zipcode)) {
//                                             setbloodgroupError("blood group can't be empty")
//                                             setquantityError("quantity can't be empty")
//                                             setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//                                             return true;
//                                         }

//                                     }
//                                     else {
//                                         setbloodgroupError("")
//                                         setquantityError("")
//                                         setzipcodeError("")
//                                         if (address == "" && zipcode === " " && bloodgroup === "") { //10

//                                             setbloodgroupError("blood group can't be empty")
//                                             setaddressError("address can't be empty")
//                                             setzipcodeError("zipcode can't be empty")
//                                             if (!zipregex.test(zipcode)) {
//                                                 setbloodgroupError("blood group can't be empty")
//                                                 setaddressError("address can't be empty")
//                                                 setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//                                                 return true;
//                                             }

//                                         }
//                                         else {

//                                             setbloodgroupError("")
//                                             setaddressError("")
//                                             setzipcodeError("")

//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }

//     if (bloodbankname === "" && address === "") {
//         setbloodbanknameError("Hospital Name can't be empty")
//         setaddressError("Address can't be empty")
//         if (!zipregex.test(zipcode)) {
//             setbloodbanknameError("Hospital Name can't be empty")
//             setaddressError("Address can't be empty")
//             setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//             return true;
//         }
//     }
//     else {
//         setbloodbanknameError(" ")
//         setaddressError(" ")
//         setzipcode(" ")
//         if (bloodbankname === "" && zipcode === "") {
//             setbloodbanknameError("Hospital Name can't be empty")
//             setzipcodeError("zipcode can't be empty")
//             if (!zipregex.test(zipcode)) {
//                 setbloodbanknameError("Hospital Name can't be empty")
//                 setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//                 return true;
//             }
//         }
//         else {
//             setbloodbanknameError("")
//             setzipcodeError("")
//             if (bloodbankname === "" && bloodgroup === "") {
//                 setbloodbanknameError("blood bank name can't be empty")
//                 setbloodgroupError("bloodgroup can't be empty")
//                 if (!zipregex.test(zipcode)) {
//                     setbloodbanknameError("blood bank name can't be empty")
//                     setbloodgroupError("bloodgroup can't be empty")
//                     setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//                     return true;
//                 }
//             }
//             else {
//                 setbloodbanknameError(" ")
//                 setbloodgroupError(" ")
//                 setzipcodeError("")
//                 if (bloodbankname === "" && quantity === "") {
//                     setbloodbanknameError("blood bank name can't be empty")
//                     setquantity("quantity can't be empty")
//                     if (!zipregex.test(zipcode)) {
//                         setbloodbanknameError("blood bank name can't be empty")
//                     setquantity("quantity can't be empty")
//                         setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//                         return true;
//                     }
//                 }
//                 else {
//                     setbloodbanknameError("")
//                     setzipcodeError("")
//                     setquantity("")
//                     if (address === "" && zipcode === "") {
//                         setaddressError("address can't be empty")
//                         setzipcodeError("zipcode can't be empty")
//                         if (!zipregex.test(zipcode)) {
//                             setaddressError("address can't be empty")
//                             setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//                             return true;
//                         }
//                     }
//                     else {
//                         setaddressError("")
//                         setzipcodeError("")
//                         if (address === "" && bloodgroup === "") {
//                             setaddressError("address can't be empty")
//                             setbloodgroupError("bloodgroup can't be empty")
//                             if (!zipregex.test(zipcode)) {
                           
//                                 setbloodgroupError("bloodgroup can't be empty")
//                                 setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//                                 return true;
//                             }
//                         }
//                         else {
//                             setaddressError("")
//                             setbloodgroupError("")
//                             setzipcodeError("")
//                             if (address == "" && quantity == "") {
//                                 setaddressError("address can't be empty")
//                                 setquantityError("quantity can't be empty")
//                                 if (!zipregex.test(zipcode)) {
                           
//                                     setaddressError("address can't be empty")
//                                     setquantityError("quantity can't be empty")
//                                     setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//                                     return true;
//                                 }
//                             }
//                             else {
//                                 setaddressError("")
//                                 setquantityError("")
//                                 setzipcodeError("")
//                                 if (zipcode == "" && bloodgroup == "") {
//                                     setzipcodeError("zipcode can't be empty")
//                                     setbloodgroupError("bloodgroup can't be empty")
//                                     if (!zipregex.test(zipcode)) {
                           
//                                         setzipcodeError("zipcode can't be empty")
//                                     setbloodgroupError("bloodgroup can't be empty")
//                                         setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//                                         return true;
//                                     }
//                                 }
//                                 else {
//                                     setzipcodeError("")
//                                     setbloodgroupError("")
//                                     setzipcodeError("")
//                                     if (zipcode == "" && quantity == "") {
//                                         setzipcodeError("zipcode can't be empty")
//                                         setquantityError("quantity can't be empty")
//                                         if (!zipregex.test(zipcode)) {
                           
//                                             setzipcodeError("zipcode can't be empty")
//                                             setquantityError("quantity can't be empty")
//                                             setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//                                             return true;
//                                         }
//                                     }
//                                     else {
//                                         setzipcodeError("")
//                                         setquantityError("")
//                                         setzipcodeError("")
//                                         if (bloodgroup == "" && quantity == "") {
//                                             setbloodgroupError("bloodgroup can't be empty")
//                                             setquantityError("quantity can't be empty")
//                                             if (!zipregex.test(zipcode)) {
//                                                 setbloodgroupError("bloodgroup can't be empty")
//                                                 setquantityError("quantity can't be empty")
//                                                 setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//                                                 return true;
//                                             }

//                                         }
//                                         else {
//                                             setbloodgroupError("")
//                                             setquantityError("")
//                                             setzipcodeError("")
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//             if (address === "") {
//                 setaddressError("Address cannot be blank");
//                 return true;
//             }
//             else {

//                 setaddressError(" ")
//             }
//             if (bloodbankname === "") {
//                 setbloodbanknameError("bloodbank name cannot be blank");
//                 return true;
//             }
//             else {
//                 setbloodbanknameError(" ")
//             }
//             if (bloodgroup === "") {
//                 setbloodgroupError("bloodgroup cannot be blank")
//                 return true;
//             }
//             else {
//                 setbloodgroupError("")
//             }
//             if (zipcode === "") {
//                 setzipcodeError("zipcode cannot be blank");
//                 return true;
//             }
//             else {
//                 setzipcodeError(" ")
//             }
//             var zipregex = /(^\d{5}$)|(^\d{5}-\d{4}$)/
//             if (!zipregex.test(zipcode)) {
//                 console.log('error testing')
//                 setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
//                 return true;
//             }
//             setzipcodeError(" ")
//             if (quantity == "") {
//                 setquantityError("quantity cannot be blank");
//                 return true;

//             }
//             else {

//                 setquantityError("");
//                 // if(!quantity.match[0-9])
//                 // {
//                 //     setquantityError("quantity must be in numbers");
//                 //     return true;
//                 // }

//             }

//         }
//     }
// }




// // let validate = () => {


// //     if (bloodgroup === "" && zipcode === "" && address === "" && bloodbankname === "" && quantity === "") {

// //         setbloodbanknameError("Bloodbank name can't be blank");
// //         setzipcodeError("zipcode can't be blank");
// //         setbloodgroupError("blood group can't be blank");
// //         setaddressError("Address cannot be blank");
// //         setquantityError("Quantity cannot be blank");
// //         setMessageError(" ");
// //         return true;
// //     }
// //     else {
// //         setbloodbanknameError("");
// //         setzipcodeError("");
// //         setbloodgroupError("");
// //         setaddressError("");
// //         setquantityError("");

// //     }

// //     if (bloodbankname === "" && address === "" && zipcode === "" && bloodgroup === "") {
// //         setbloodbanknameError("Bloodbank name can't be blank");
// //         setzipcodeError("zipcode can't be blank");
// //         setbloodgroupError("blood group can't be blank");
// //         setaddressError("Address cannot be blank");
        


// //     }
// //     else {
// //         setbloodbanknameError("");
// //         setzipcodeError("");
// //         setbloodgroupError("");
// //         setaddressError("");

// //         if (bloodbankname === "" && address === "" && zipcode === "" && quantity === "") {
// //             setbloodbanknameError("Bloodbank name can't be blank");
// //             setzipcodeError("zipcode can't be blank");
// //             setaddressError("Address cannot be blank");
// //             setquantityError("Quantity cannot be blank");

// //         }
// //         else {
// //             setbloodbanknameError("");
// //             setzipcodeError("");
// //             setaddressError("");
// //             setquantityError("");

// //             if (bloodbankname === "" && address === "" && bloodgroup === "" && quantity === "") {

// //                 setbloodbanknameError("Bloodbank name can't be blank");
// //                 setbloodgroupError("blood group can't be blank");
// //                 setaddressError("Address cannot be blank");
// //                 setquantityError("Quantity cannot be blank");
// //             }
// //             else {
// //                 setbloodbanknameError("");
// //                 setbloodgroupError("");
// //                 setaddressError("");
// //                 setquantityError("");

// //                 if (bloodbankname === "" && zipcode === "" && bloodgroup === "" && quantity === "") {

// //                     setbloodbanknameError("Bloodbank name can't be blank");
// //                     setzipcodeError("zipcode cannott be blank");
// //                     setbloodgroupError("Address cannot be blank");
// //                     setquantityError("Quantity cannot be blank");
// //                 }
// //                 else {
// //                     setbloodbanknameError("");
// //                     setzipcodeError("");
// //                     setbloodgroupError("");
// //                     setquantityError("");

// //                     if (address === "" && zipcode === "" && bloodgroup === "" && quantity === "") {

// //                         setquantityError("Quantity cannot be blank");
// //                         setzipcodeError("zipcode can't be blank");
// //                         setbloodgroupError("blood group can't be blank");
// //                         setaddressError("Address can't be blank");
                       

// //                     }
// //                     else {
// //                         setzipcodeError("");
// //                         setbloodgroupError("");
// //                         setaddressError("");
// //                         setquantityError("");

// //                     }

// //                 }
// //             }

// //         }
// //     }

// //     if (bloodbankname === "" && address === "" && bloodgroup === "") { //1
// //         setbloodbanknameError("bloodbankname can't be empty")
// //         setaddressError("address can't be empty")
// //         setbloodgroupError("bloodgroup can't be empty")
// //         return true;

// //     }
// //     else {
// //         setbloodbanknameError("")
// //         setaddressError("")
// //         setbloodgroupError("")
// //         if (bloodbankname === "" && address === "" && zipcode === "") { //2
// //             setbloodbanknameError("bloodbankname can't be empty")
// //             setaddressError("address can't be empty")
// //             setzipcodeError("zipcode can't be empty")
// //             return true;
// //         }
// //         else {
// //             setbloodbanknameError("")
// //             setaddressError("")
// //             setzipcodeError("")
// //             if (bloodbankname === "" && address == "" && quantity == "") { //3
// //                 setbloodbanknameError(" bloodbankname can't be empty")
// //                 setaddressError("address can't be empty")
// //                 setquantityError("quantity can't be empty")
// //                 return true;
// //             }
// //             else {
// //                 setbloodbanknameError(" ")
// //                 setaddressError("")
// //                 setquantityError("")
// //                 if (address === "" && zipcode === "" && bloodgroup === "") { //4
// //                     setbloodgroupError("bloodgroup can't be empty")
// //                     setaddressError("address can't be empty")
// //                     setzipcodeError("zipcode can't be empty")
// //                     return true;
// //                 }
// //                 else {
// //                     setbloodgroupError("")
// //                     setaddressError("")
// //                     setzipcodeError("")
// //                     if (address === "" && zipcode === "" && quantity === "") { //5
// //                         setquantityError("quantity can't be empty")
// //                         setaddressError("address can't be empty")
// //                         setzipcodeError("zipcode can't be empty")
// //                     }
// //                     else {
// //                         setquantityError("")
// //                         setaddressError("")
// //                         setzipcodeError("")
// //                         if (bloodbankname == " " && zipcode == "" && quantity == "") { //6
// //                             setbloodbanknameError("bloodbank name can't be empty")
// //                             setbloodgroupError("blood group can't be empty")
// //                             setzipcodeError("zipcode can't be empty")
// //                             return true;
// //                         }
// //                         else {
// //                             setbloodbanknameError("")
// //                             setbloodgroupError("")
// //                             setzipcodeError("")
// //                             if (bloodbankname === "" && bloodgroup === "" && quantity == "") { //7
// //                                 setbloodbanknameError("bloodbank name can't be empty")
// //                                 setbloodgroupError("bloodgroup can't be empty")
// //                                 setquantityError("quantity can't be empty")
// //                                 return true;
// //                             }
// //                             else {
// //                                 setbloodbanknameError("")
// //                                 setbloodgroupError("")
// //                                 setquantityError("q")
// //                                 if (bloodbankname == "" && bloodgroup == "" && zipcode === "") { //8
// //                                     setbloodbanknameError("bloodbank name can't be empty")
// //                                     setbloodgroupError("blood group can't be empty")
// //                                     setzipcodeError("zipcode can't be empty")
// //                                     return true;
// //                                 }
// //                                 else {
// //                                     setbloodgroupError("")
// //                                     setbloodbanknameError("")
// //                                     setzipcodeError("")
// //                                     if (zipcode === "" && bloodgroup === "" && quantity === "") { //9
// //                                         setbloodgroupError("blood group can't be empty")
// //                                         setquantityError("quantity can't be empty")
// //                                         setzipcodeError("zipcode can't be empty")
// //                                     }
// //                                     else {
// //                                         setbloodgroupError("")
// //                                         setquantityError("")
// //                                         setzipcodeError("")
// //                                         if (address == "" && zipcode === " " && bloodgroup === "") { //10

// //                                             setbloodgroupError("blood group can't be empty")
// //                                             setaddressError("address can't be empty")
// //                                             setzipcodeError("zipcode can't be empty")

// //                                         }
// //                                         else {

// //                                             setbloodgroupError("")
// //                                             setaddressError("")
// //                                             setzipcodeError("")

// //                                         }
// //                                     }
// //                                 }
// //                             }
// //                         }
// //                     }
// //                 }
// //             }
// //         }
// //     }

// //     if (bloodbankname === "" && address === "") {
// //         setbloodbanknameError("Hospital Name can't be empty")
// //         setaddressError("Address can't be empty")
// //         return true;
// //     }
// //     else {
// //         setbloodbanknameError(" ")
// //         setaddressError(" ")
// //         if (bloodbankname === "" && zipcode === "") {
// //             setbloodbanknameError("Hospital Name can't be empty")
// //             setzipcodeError("zipcode can't be empty")
// //             return true;
// //         }
// //         else {
// //             setbloodbanknameError("")
// //             setzipcodeError("")
// //             if (bloodbankname === "" && bloodgroup === "") {
// //                 setbloodbanknameError("blood bank name can't be empty")
// //                 setbloodgroupError("bloodgroup can't be empty")
// //                 return true;
// //             }
// //             else {
// //                 setbloodbanknameError(" ")
// //                 setbloodgroupError(" ")
// //                 if (bloodbankname === "" && quantity === "") {
// //                     setbloodbanknameError("blood bank name can't be empty")
// //                     setquantity("quantity can't be empty")
// //                     return true;
// //                 }
// //                 else {
// //                     if (address === "" && zipcode === "") {
// //                         setaddressError("address can't be empty")
// //                         setzipcodeError("zipcode can't be empty")
// //                         return true;
// //                     }
// //                     else {
// //                         setaddressError("")
// //                         setzipcodeError("")
// //                         if (address === "" && bloodgroup === "") {
// //                             setaddressError("address can't be empty")
// //                             setbloodgroupError("bloodgroup can't be empty")
// //                             return true;
// //                         }
// //                         else {
// //                             setaddressError("")
// //                             setbloodgroupError("")
// //                             if (address == "" && quantity == "") {
// //                                 setaddressError("address can't be empty")
// //                                 setquantityError("quantity can't be empty")
// //                             }
// //                             else {
// //                                 setaddressError("")
// //                                 setquantityError("")
// //                                 if (zipcode == "" && bloodgroup == "") {
// //                                     setzipcodeError("zipcode can't be empty")
// //                                     setbloodgroupError("bloodgroup can't be empty")
// //                                     return true;
// //                                 }
// //                                 else {
// //                                     setzipcodeError("")
// //                                     setbloodgroupError("")
// //                                     if (zipcode == "" && quantity == "") {
// //                                         setzipcodeError("zipcode can't be empty")
// //                                         setquantityError("quantity can't be empty")
// //                                         return true;
// //                                     }
// //                                     else {
// //                                         setzipcodeError("")
// //                                         setquantityError("")
// //                                         if (bloodgroup == "" && quantity == "") {
// //                                             setbloodgroupError("bloodgroup can't be empty")
// //                                             setquantityError("quantity can't be empty")
                                           
// //                                         }
// //                                         else {
// //                                             setbloodgroupError("")
// //                                             setquantityError("")
// //                                         }
// //                                     }
// //                                 }
// //                             }
// //                         }
// //                     }
// //                 }
// //             }
// //             if (address === "") {
// //                 setaddressError("Address cannot be blank");
// //                 return true;
// //             }
// //             else {

// //                 setaddressError(" ")
// //             }
// //             if (bloodbankname === "") {
// //                 setbloodbanknameError("bloodbank name cannot be blank");
// //                 return true;
// //             }
// //             else {
// //                 setbloodbanknameError(" ")
// //             }
// //             if (bloodgroup === "") {
// //                 setbloodgroupError("bloodgroup cannot be blank")
// //                 return true;
// //             }
// //             else {
// //                 setbloodgroupError("")
// //             }
// //             if (zipcode === "") {
// //                 setzipcodeError("zipcode cannot be blank");
// //                 return true;
// //             }
// //             else {
// //                 setzipcodeError(" ")
// //             }
// //             var zipregex = /(^\d{5}$)|(^\d{5}-\d{4}$)/
// //             if (!zipregex.test(zipcode)) {
// //                 console.log('error testing')
// //                 setzipcodeError("Please enter valid zipcode in digits and correct characters in length");
// //                 return true;
// //             }
// //             setzipcodeError(" ")
// //             if (quantity == "") {
// //                 setquantityError("quantity cannot be blank");
// //                 return true;

// //             }
// //             else {

// //                 setquantityError("");
// //                 // if(!quantity.match[0-9])
// //                 // {
// //                 //     setquantityError("quantity must be in numbers");
// //                 //     return true;
// //                 // }

// //             }

// //         }
// //     }
// // }

