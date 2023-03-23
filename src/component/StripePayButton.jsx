import React from 'react'
import axios from 'axios'
import { useHistory, Redirect  } from 'react-router-dom'
import BillingAddress from './ineffectiveComponents/BillingAddress'


function StripePayButton({cartItems}) {
  const history = useHistory()
    const onClick=()=>{
      const url=`http://localhost:3000/stripe/create-checkout-session`
      axios.post(url, cartItems)
      .then((res)=>{
        console.log(res);
        if(res.status===200){
          window.location.replace(res.data.url);
          // history.push(res.data)
          
        }
      }).catch((err)=>{
        console.log(err.message);
      })
      
    }
  return (
    <div>
   
        <button onClick={onClick}>checkout</button>
    </div>
  )
}

export default StripePayButton