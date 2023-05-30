import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
// import EmailIcon from '@mui/icons-material/Email';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link } from 'react-router-dom';
import ecs from '../images/ECSLTD.jpeg'

function Copyright() {
  const years = new Date().getFullYear()
  return (
    <div class="copyright_section">
    <div class="container">
    <p className="copyright_text"> <EmailOutlinedIcon /> <Link to="mailto:info@natreltherapy.shop" className="copyright_text">sales@natreltherapy.shop</Link></p>
       <p className="copyright_text"><CopyrightIcon /> {years} All Rights Reserved.</p> 
       <p className="copyright_text">Created & Designed by <img style={{width:"4%"}} src={ecs} alt="ecs logo" /><Link to="mailto:admin@ecsltd.io"> ECS LTD</Link></p>
    </div>
 </div>
  )
}

export default Copyright