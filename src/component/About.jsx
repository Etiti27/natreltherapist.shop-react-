import React from 'react'
// import AboutUs from './AboutUs'
import janine from "../images/janine.jpeg"
import { Link } from "react-router-dom"
// import {configData} from "./config/config"

function About() {
   
  return (
    <div class="about_section layout_padding">
    <div class="container">
       <div class="about_section_main">
          <div class="row">
             <div class="col-md-6">
                <div class="about_taital_main">
                   <h1 class="about_taital title">About Us as a Natural Hair Therapist</h1>
                   <p class="about_text">When you have problems with your tooth, you visit the dentist. Also, when you need to unwind, relax and manage stress, you’d probably visit a massage therapist or a psychotherapist. Who then do you visit when you have problems with your hair and scalp? Do I hear you say a hairdresser?  Well, if you did, you probably do not know yet what a natural hair therapist is. So then? I presume you now want to find out what a natural hair therapist is, and what makes a person fit to be called a natural hair therapist? Let's find out!</p>
                   <button className="btn btn-primary read-more"> <Link to="/aboutus">Read more</Link></button>
                   {/* <div className="read-more"><a href="#">Read More</a></div> */}
                </div>
             </div>
             <div class="col-md-6">
                <div><img src={janine} className="image_3" alt='janine'/></div>
             </div>
          </div>
       </div>
    </div>
 </div>
  )
}

export default About