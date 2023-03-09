import React from 'react'


import UseFetch from './UseFetch'
import loader from "../images/loader-waiting.gif"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useHistory } from 'react-router-dom';




function BannerDetail() {
  const history= useHistory()
 
        const url='http://localhost:3000/ourstory'
  const {isPending:isLoading, error, products:stories}=UseFetch(url);
  console.log(stories);
  return (
   
 <div className="all-content" >
        
            
             
             
                    
                        
                        <div>{isLoading && <p> <img src={loader} alt="loading"/></p> }</div>
                        <div>{error && <p>{error}</p>}</div>
                         
                           {stories && stories.map(function(stories, i){
                           return  <div key={i}>
                           <h1 className="title">OUR STORY</h1>
                            <p className="banner_text">{stories.story} </p>
                            <hr/>

                            <h1 className="title">MISSION</h1>
                            <p className="banner_text">{stories.mission} </p>
                            <hr/>

                            <h1 className="title">VISION</h1>
                            <p className="banner_text">{stories.vision} </p>
                   </div>
       })}
                          
                       
                       
         <ArrowBackOutlinedIcon onClick={()=>{history.go(-1)}} />         
       </div>              
              
           
   
  )

}

export default BannerDetail