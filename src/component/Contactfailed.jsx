import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import fail from '../images/failed.png'

function Contactfailed() {
    const history = useHistory()
  return (
    <div>
       {/* <h1>Ooops!</h1> 
       <h3>E-mail not sent</h3>
       <p>we are sorry, we encountered a problem while trying to send your message, pls try again after sometime or reach out to  <Link to='mailto:chris@natreltherapy.shop'>developer</Link> for urgent attention</p>

       <div>
        <button onClick={history.push('/contact')}>Resend your message</button>
       </div> */}

       <div className="body-success">
    <div className="carded">
      <div style={{
        borderRadius:"200px", 
        height:"200px", 
        width:"200px", 
        background: "red", 
        margin:"0 auto"}}>
        <i className="checkmark">x</i>
        
      </div>
        <h1 className="success-h1 "style={{color:"red"}}>Oops!</h1> 
        <p className="success-p">Your message failed!. <br/> we are sorry, we encountered a problem while trying to send your message, pls try again after sometime or reach out to <span style={{color:"red"}}> <Link  to='mailto:chris@natreltherapy.shop'>developer</Link> </span> for urgent attention</p>
        <br/> 
        <br/>
        <div className="btn btn-success"><Link to="/contact">Resend</Link></div>
      </div>

     
      </div>


       

    </div>

  )
}

export default Contactfailed