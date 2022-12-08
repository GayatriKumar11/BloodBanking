import React from "react";
import './../css/payment.css';
import ReactDOM from "react-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });



function Payment() {
    const createOrder = (data, actions)=> {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "0.01",
              },
            },
          ],
        });
      }

  return (
    <div className="App">
        <Header />
        <div className="wrapper"> 
        <br /><br /><br /><br /><br />
      <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}


      />
      
      </div>
      <Footer />
      </div>

  )
}

export default Payment
