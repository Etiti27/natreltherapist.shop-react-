import React,{useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function DescriptionAlerts() {
  const history= useHistory();
 const [isTrue, setIsTrue]=useState(true)
 setTimeout(() => {
  setIsTrue(false)
 }, 10000);
  return (
    

    <div>
     
   {isTrue ? <div class="alert alert-danger" role="alert" style={{textAlign: 'center', fontSize:'20px', padding: '40px'}}>
  <img src="data:image/png;base64,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" alt="warning"/>
  <br/>
   Sorry!  USERNAME already exist in our database, You will be redirected back to the registration page, choose a unique USERNAME
</div>: history.replace("/register")}





<div>{  }</div>
    </div>


  );

}