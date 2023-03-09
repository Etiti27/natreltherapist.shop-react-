import React from 'react'

import UseFetch from './UseFetch'
import loading from "../images/loader-waiting.gif";
import hairElixir from "../images/HairElixir.jpeg";
import { Link, useHistory } from "react-router-dom";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';


function ProductDetail() {
   const history = useHistory()
    const url='http://localhost:3000/data'
    const {isPending:isLoading, error, products}=UseFetch(url);
    console.log(products);
    return (
        <div class="product_section layout_padding">
        <div class="container">
           <div class="row">
              <div class="col-sm-12">
              <div>{isLoading && <p> <img src={loading} alt="loading"/></p> }</div>
              <div>{error && <p>{error}</p>}</div>
               <div>{error && <p>{error}</p>}</div>
               {products && products.map(function(product, i){
               return  <div key={i}>
               <h1 class="product_taital title">Our Products</h1>
            
    
              <div class="col-lg col-sm">
                         <div className="product_box">

                            <h3 className="bursh_text title">{product.productName}</h3>
                            <h1 className="title">HAIR ELIXIR DESCRIPTIONS</h1>
                            <p className="lorem_text">{product.productDescription} </p>
                            <p>{product.productMoreDescription}</p> 

                            <h1 className="title">INGREDIENTS</h1>
                            <p>{product.productIngredient}</p>
                                    
                                  
                               </div>
                               
                            </div>

                         </div>
                  
    
    
             
              
          })}
                 
    <div>
         <ArrowBackOutlinedIcon className="" onClick={()=>{history.go(-1)}} />      
         </div>  
              </div>
           </div>

          
           </div>
           </div>
      )
}

export default ProductDetail