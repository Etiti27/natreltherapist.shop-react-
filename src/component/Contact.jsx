
import React, { useState } from 'react'
import { primaryURL, age } from './Config';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'


function Contact() {
    const history=useHistory()
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [subject, setSubject]=useState("")
    const [message, setMessage]=useState("")
    const [emailvalid, setEmailvalid]=useState(true)

const emailValidate=(e)=>{
  const targetValue=e.target.value
  setEmail(targetValue)
  const sliceData=targetValue.toLowerCase().slice(-10)
  if (sliceData==='@gmail.com'){
    setEmailvalid(false)
    
    
  }else{

    setEmailvalid(true)
  }
  
}
    const submitContact=(e)=>{
       e.preventDefault()
        const allInput={
            name,email,subject, message
        };


        
        
       const contactURL=`${primaryURL}/contact`

       axios({method:"POST",
      withCredentials:true,
      url:contactURL,
      data:allInput
      })
       
.then((response)=>{
        // console2.log(res);
        
        if(response.status!==200){
          history.replace('/fail')
            
        }else{
         
          history.replace('/contactsubmitted')   
        }
      })


    }
   
   
  return (
    <div>
       
  <div className="contact-container">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="topic">Address</div>
          <div className="text-one">Zinkstraat 24- Breda- </div>
          <div className="text-two">Netherlands</div>
        </div>
        {/* <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">Phone</div>
          <div className="text-one">+0098 9893 5647</div>
          <div className="text-two">+0096 3434 5678</div>
        </div> */}
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text-one">sales@natreltherapy.shop</div>
          <div className="text-two">connect@natreltherapy.shop</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message</div>
        <p>If you have any complains, queries, suggestions, partnership, 
        you can send us message from here. It's our pleasure to help you.</p>
      <form >
        <div className="input-box">
          <input type="text" required placeholder="Enter your name" name='name' onChange={(e)=>{setName(e.target.value)}} value={name}/>
        </div>
        <div className="input-box email">
      
          <input type="email" required placeholder="Enter your email" name='email' onChange={emailValidate} value={email}/>
        </div>
        <div className="input-box">
        <input type="text" required placeholder="Subject" name='subject' onChange={(e)=>{setSubject(e.target.value)}} value={subject}/>
        </div>
        <div className="input-box message-box">
        <textarea type="text" required placeholder="Write your message" name='message' onChange={(e)=>{setMessage(e.target.value)}} value={message}/>
        </div>
        {/* <div className="italicEmail"> {!emailvalid && <p className="italicEmail">"@gmail.com" emails is not accepted</p>}</div> */}
        <div><button  onClick={submitContact} className="btn btn-success">Send Now</button></div>
      </form>
    </div>
    </div>
  </div>
  

    </div>
  )
}

export default Contact