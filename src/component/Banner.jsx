import React from 'react'
import banner from "../images/banner-img.png"
import shannaHair from "../images/shanna.jpg";
import UseFetch from './UseFetch';
import loader from '../images/loader-waiting.gif'
import { Link } from 'react-router-dom';
import { primaryURL, age } from './Config';

function Banner() {
   const url=`${primaryURL}/ourstory`
  const {isPending:isLoading, error, products:stories}=UseFetch(url);
  console.log(stories);
  return (
   
    <div className="banner_section layout_padding">
         <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <div className="row">
                        <div className="col-sm-6">
                        <div>{isLoading && <p> <img src={loader} alt="loading"/></p> }</div>
                        <div>{error && <p>{error}</p>}</div>
                         <main className="banner_taital" >ALL ABOUT 100% NATURAL </main>
                           {stories && stories.map(function(stories, i){
                           return  <div key={i}>
                           
                            <p className="banner_text">{stories.story.substring(0, 500)}...
                           <span className="btn  read-more" ><Link to="/bannerdetails">Read More</Link></span>
                           </p>
                   </div>
       })}
                          
                        </div>
                        <div className="col-sm-6">
                           <div className="banner_img"><img src={shannaHair} alt="banner"/></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
  )
}

export default Banner