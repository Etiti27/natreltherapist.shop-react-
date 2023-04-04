import React from 'react'

import UseFetch from './UseFetch'
import loading from "../images/loader-waiting.gif";
import hairElixir from "../images/hairelixir.png";
import { Link, useHistory, useParams } from "react-router-dom";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import gobackarrow from "../images/gobackarrow.gif"


function ProductDetail() {
   const history = useHistory()
   const {name}= useParams()
    const url=`http://localhost:3000/data/${name}`
    const {isPending:isLoading, error, products}=UseFetch(url);
    const alerte= ()=>{
      alert(`hello`)
    }
    
    return (
        <div class="product_section layout_padding">
        <div class="container">
           <div class="row">
              <div class="col-sm-12">
              <div>{isLoading && <p> <img src={loading} alt="loading"/></p> }</div>
              <div>{error && <p>{error}</p>}</div>
               <div>{error && <p>{error}</p>}</div>
               {products && products.map(function(product, i){
               return  <div key={product._id}>
              <div class="col-lg col-sm">
                         <div className="product_box">

                            <h3 className="bursh_text title">{product.name}</h3>
                            <h1 className="title">HAIR ELIXIR DESCRIPTIONS</h1>
                            <p className="lorem_text">{product.desc} </p>
                            <p className='lorem_text'>{product.moreDesc}</p> 

                            <h1 className="title" onClick={alerte}>INGREDIENTS</h1>
                            <p className='lorem_text'>{product.ingredient}</p>
                            <form onSubmit={alerte}>
                            <button >check</button>
                            </form>
                            
                                    
                                  
                               </div>
                               
                            </div>

                         </div>
                  
    
    
             
              
          })}
                 
    <img className="gobackarrow" src={gobackarrow} alt="go back arrow" onClick={()=>{history.go(-1)}}/>
    
     
              </div>
           </div>

          
           </div>
           </div>
      )
}

export default ProductDetail