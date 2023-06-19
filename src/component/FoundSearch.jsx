import React from 'react'

import UseFetch from './UseFetch'
import loading from "../images/loader-waiting.gif";
import hairElixir from "../images/hairelixir.png";
import { Link, useHistory} from "react-router-dom";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import gobackarrow from "../images/gobackarrow.gif"
import { primaryURL, age } from './Config';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import axios from 'axios'


function ProductDetail() {
   const history = useHistory()
   
   
   
    const searchedURL=`${primaryURL}/searchedItem`
    
    let {isPending:isLoading, error, products}=UseFetch(searchedURL);
   console.log(products);

   let text=`Product added to Cart, Do you want to view the cart?`
   
   const confirmation=()=>{
      if(window.confirm(text)){
        history.push('/cart');
      }else{
        history.push('/');
      }
    } 

    const handleCart=(e)=>{
      e.preventDefault();
      const allFeactures={
        name:e.target.name.value,
        id:e.target.id.value,
        salePrice:e.target.salePrice.value,
        quantity:e.target.quantity.value,
        image:e.target.image.value
      };
  //  const handleCart=(e)=>{

      
  //     e.preventDefault();
  //     const allFeactures={
  //       name:e.target.name.value,
  //       id:e.target.id.value,
  //       salePrice:e.target.salePrice.value,
  //       quantity:e.target.quantity.value,
  //       image:e.target.image.value
  //     };
  const addToCartURL=`${primaryURL}/addtocart`;
  axios({
    method:"POST",
    url:addToCartURL,
    data:allFeactures,
    withCredentials:true
  })
 .then((res)=>{
        if(res.status===200){
          confirmation()
          // history.push("/cart")
        }
      })
   }

 
    
    return (
      <div style={{marginTop:"0%"}} className="product_box card shadow-sm card-body">
        
        
        
        <div class="container">
           <div class="row">
              <div class="col-sm-12 space-button">
              <div>{isLoading && <p> <img src={loading} alt="loading"/></p> }</div>
              <div>{error && <p>{error}</p>}</div>
               <div>{error && <p>{error}</p>}</div>
              
              
              <div class="col-lg col-sm">
                         {/* <div className="product_box"> */}
                         {products && products ==='not found!'? 
                         <div className="title"style={{height:'100%', width:'100%', fontSize:'4rem'}}>No Product Found!! </div>
                        : 
                        <div class="col-lg col-sm">
              
              <div className="product_box">
              

                 <h1 className="bursh_text title">{products && products.name.toUpperCase()}</h1>
                 {/* <h1 className="title">{product.name} DESCRIPTIONS</h1> */}
                 <p className="lorem_text">{products && products.desc} </p>
                 <p className='lorem_text'>{products && products.moreDesc}</p> 
                 {products && <img src={require(`../images/${products.image}`)} alt={products.name} className='imagee' style={{width:"300px", alignContent:"center"}} />}

                 <h1 className="bursh_text title">INGREDIENTS</h1>
                 <p className='lorem_text'>{products && products.ingredient}</p>


                 <h1 style={{paddingTop:"20px"}} className="bursh_text title">USAGE</h1>
                 <p>{products && products.usage}</p>
                 
                         
                       
                    </div>
                    
                 </div>
                            }      
                                  
                               {/* </div> */}
                               
                            </div>

                         </div>
                  
    
    
             
                        {products !==null && <form onSubmit={handleCart}>
                                <input type="hidden"   name="name" value={products.name} />
                                
                                  {products.salePrice ?
                                <input type="hidden"  name="salePrice" value={products.salePrice} /> 
                                  :
                                <input type="hidden"  name="price" value={products.price} /> 
                                }
                                <input type="hidden" name="quantity" value={products.quantity} />
                                <input type='hidden' name="image" value={products.image}  />
                                
                                <input type="hidden" name="id"  value={products._id}/>
                              
                              
                                <button style={{marginLeft:"50%"}}>
                                <div className="btn btn-success pull-right" ><AddShoppingCartIcon /> Buy Now </div>  
                                </button>
                                
                              </form>}
          
                 
   
    
     
              </div>
              <img className="gobackarrow" src={gobackarrow} alt="go back arrow" onClick={()=>{history.go(-1)}}/>
           </div>

          
        </div>   
          
      )
}

export default ProductDetail