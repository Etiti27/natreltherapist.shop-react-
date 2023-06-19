import React from 'react'
import { IconButton, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import gobackarrow from "../images/gobackarrow.gif";


function AboutUs() {
  
    
  return (
    <div className="all-content">
      <h1 className="title">OUR STORY</h1>
      <p>
      Na'trel Therapy is a successor brand that was formed from our founder's pure passion for an healthy natural hair journey. Our existence since about two decades offering natural hair care product is a foundation on which Na'trel Therapy was established. 
      We pride ourselves in offering natural, organic products with unique ingredients, across the world as the No. 1 Natural Hair and Skin Beauty Brand globally with clients who have been testifying to the wonders of our products. 
      We are dedicated to providing customers with the highest quality products and an exceptional customer experience. 
      Our goal is to help you look and feel your best, every day. 
      With a focus on natural, organic, unique and nourishing ingredients, our products are carefully crafted to deliver real results for all hair and skin types. 
      Whether you're looking to hydrate dry skin, improve the look and feel of damaged hair, or simply pamper yourself, we have a solution for you. We are dedicated to dynamic research and formulation of products that positively impact your life, with a lineup of hair, skin and overall beauty products, luxuriously made just for YOU.
      At Na'trel Therapy, we believe that self-care is a vital part of overall health and wellness. Our products are designed to be more than just a quick fix; they're a long-term investment for your well-being.
      </p>
      <h1 className="title">Mission</h1>
      <p>
      Na'trel Therapy is here to provide you luxury lifestyle with products formulated for YOU, as well as providing an opportunity for everyone to build an evolutionary business model and achieve generational wealth.
      </p>

      <h1 className="title">Vision</h1>
      <p>
      At Na'trel Therapy, our vision is to be the leading provider of premium, natural, organic and unique hair and skin beauty products that help customers look and feel their best.
      Our vision is to create a world where everyone can enjoy the benefits of healthy, beautiful hair and skin, without sacrificing their well-being, because we see a future where self-care is a regular part of everyone's routine, and where natural beauty products are the norm, not the exception.
      We strive to be a trusted and reliable source of information and inspiration and to provide an exceptional customer experience that exceeds expectations. Our goal is to empower our customers to make informed decisions about their beauty routine, and to help them achieve the results they desire.
      We aim to offer simple but effective ways for families to create income streams and generational wealth with our business model.
      To create an evolutionary connection with a unique opportunity to unleash our clients and partners full potential to luxury, while leaving their best life.
      </p>
      <h1 className="title">Core Values</h1>
      <p>
       <ul>
          <li>Integrity</li>
          <li>Respect</li>
          <li>Diversity</li>
          <li>Teamwork</li>
          <li>Committments to Clients and Partners</li>
        </ul>
        </p>

<h1 className="title">Competitive Advantage</h1>
<p>
  <ul>
    <li>Holistic approach to our hair, skin and overall beauty</li>
    <li>Our use of organic and natural ingredients to formulate cruelty-free products</li>
    <li>Our Ingredients are from original sources</li>
    <li>Customers and Clients Satisfaction Policy</li>
    <li>Regular Business Coaching Tips</li>
    <li>Consultation</li>
  </ul>
</p>
<button><img className="gobackarrow" src={gobackarrow} alt="go back arrow" onClick={()=>{history.go(-1)}}/> </button>
   </div>
  )
}

export default AboutUs