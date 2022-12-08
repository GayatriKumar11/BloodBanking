import React from "react";
import './../css/payment.css';
import ReactDOM from "react-dom"
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
        <div className="wrapper"> 
      <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}


      />
      </div>
      </div>

  )
}

export default Payment
