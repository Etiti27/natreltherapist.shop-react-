import React from 'react'
import { Link } from 'react-router-dom'

function Contactsuccess() {
  return (
    <div>
       
    <div className="body-success">
    <div className="carded">
      <div style={{
        borderRadius:"200px", 
        height:"200px", 
        width:"200px", 
        background: "#F8FAF5", 
        margin:"0 auto"}}>
        <i className="checkmark">✓</i>
      </div>
        <h1 className="success-h1">Success</h1> 
        <p className="success-p">Your message was successfully sent. <br/> We'll be in touch shortly!</p>
        <br/> 
        <br/>
        <div className="btn btn-success"><Link to="/">Visit Home</Link></div>
      </div>

     
      </div>
    
    
    
    </div>
  )
}

export default Contactsuccess