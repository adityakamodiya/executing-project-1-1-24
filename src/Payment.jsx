import { useEffect } from 'react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./payment.css"


function Payment() {
    const navigate = useNavigate()
    const options = {
        key: "rzp_test_HJG5Rtuy8Xh2NB",
        amount: "100", //  = INR 1
        name: "Acme shop",
        description: "some description",
        image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
        handler: function(response) {
        //   alert('hello');
        navigate('/tasks')
    
        },
        prefill: {
          name: "Gaurav",
          contact: "9999999999",
          email: "demo@demo.com"
        },
        notes: {
          address: "some address"
        },
        theme: {
          color: "#F37254",
          hide_topbar: false
        }
      };
    
      const openPayModal = options => {
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
      };
      useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
      }, []);
    
      return (
        <>
          {/* <button onClick={() => openPayModal(options)}>Pay</button> */}
          <div id="payment-wrapper">
                   <div onClick={() => openPayModal(options)} className="payment-box">pay here</div>  
                   <div onClick={() => openPayModal(options)} className="payment-box">pay here</div>  
                   <div onClick={() => openPayModal(options)} className="payment-box">pay here</div>  
                   <div onClick={() => openPayModal(options)} className="payment-box">pay here</div>  
 
          </div>
        </>
      );
}

export default Payment
