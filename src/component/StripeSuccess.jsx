
import react, {useState} from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

function StripeSuccess() {
  const history = useHistory()
 

  return (
    
    
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
        <p className="success-p">We received your purchase request;<br/> we'll be in touch shortly!</p>
        <br/>
        <br/>
        <div><Link to='/' className="btn btn-success">home</Link></div>
      </div>
      </div>
    
    
   

    
   
  )
}

export default StripeSuccess