import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import EmailIcon from '@mui/icons-material/Email';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link } from 'react-router-dom';

function Copyright() {
  const years = new Date().getFullYear()
  return (
    <div class="copyright_section">
    <div class="container">
    <p className="copyright_text"> <EmailOutlinedIcon /> <Link to="mailto:info@natreltherapy.shop">info@natreltherapy.shop</Link></p>
       <p className="copyright_text"><CopyrightIcon /> {years} All Rights Reserved.</p> 
       <p className="copyright_text">Created & Designed by <Link to="mailto:admin@ecsltd.io">ECS LTD</Link></p>
    </div>
 </div>
  )
}

export default Copyright