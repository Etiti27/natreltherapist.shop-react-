import React from 'react'

import UseFetch from './UseFetch'
import loading from "../images/loader-waiting.gif";
import hairElixir from "../images/hairelixir.png";
import { Link, useHistory} from "react-router-dom";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import gobackarrow from "../images/gobackarrow.gif"
import { primaryURL, age } from './Config';


function ProductDetail() {
   const history = useHistory()
   
   
   
    const url=`${primaryURL}/searchedItem`
    let {isPending:isLoading, error, products}=UseFetch(url);
   console.log(products && products);
    
    return (
        <div class="product_section layout_padding">
        <div class="container">
           <div class="row">
              <div class="col-sm-12">
              <div>{isLoading && <p> <img src={loading} alt="loading"/></p> }</div>
              <div>{error && <p>{error}</p>}</div>
               <div>{error && <p>{error}</p>}</div>
              
              
              <div class="col-lg col-sm">
                         <div className="product_box">
                         {products && products ==='not found!'? 
                         <div className="title"style={{height:'100%', width:'100%', fontSize:'4rem'}}>No Product Found!! </div>
                        : 
                            <div>
                            <h3 className="bursh_text title">{products && products.name}</h3>
                            <h1 className="title">{products && products.name} DESCRIPTIONS</h1>
                            <p className="lorem_text">{products && products.desc} </p>
                            <p className='lorem_text'>{products && products.moreDesc}</p> 

                            <h1 className="title" >INGREDIENTS</h1>
                            <p className='lorem_text'>{products && products.ingredient}</p>
                            <form >
                           
                            </form>
                            </div>
                            }      
                                  
                               </div>
                               
                            </div>

                         </div>
                  
    
    
             
              
          
                 
   
    
     
              </div>
              <img className="gobackarrow" src={gobackarrow} alt="go back arrow" onClick={()=>{history.go(-1)}}/>
           </div>

          
           </div>
          
      )
}

export default ProductDetail