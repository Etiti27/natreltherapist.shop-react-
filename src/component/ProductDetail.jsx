import React from 'react'

import UseFetch from './UseFetch'
import loading from "../images/loader-waiting.gif";
import hairElixir from "../images/hairelixir.png";
import { Link, useHistory, useParams } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import gobackarrow from "../images/gobackarrow.gif";
import axios from "axios";
import image1 from '../images/HairElixir3.png';
import image2 from '../images/dailytoxin.png';
import { primaryURL, age } from './Config';



function ProductDetail() {
   let text=`Product added to Cart, Do you want to view the cart?`
   
   const confirmation=()=>{
      if(window.confirm(text)){
        history.push('/cart');
      }else{
        history.push('/');
      }
    } 

   const images=[
      image1,
      image2
    ]
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
      axios.post(`${primaryURL}/addtocart`, allFeactures)
      .then((res)=>{
        if(res.status===200){
          confirmation()
          // history.push("/cart")
        }
      })
   }

   const history = useHistory()
   const {name}= useParams()
    const url=`${primaryURL}/data/${name}`
    const url2=`http://localhost:3000/data/${name}`
    const {isPending:isLoading, error, products}=UseFetch(url);
   
   console.log(products);
    return (
        <div style={{marginTop:"0%"}} className="product_box card shadow-sm card-body">
        
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
                         

                            <h1 className="bursh_text title">{product.name.toUpperCase()}</h1>
                            {/* <h1 className="title">{product.name} DESCRIPTIONS</h1> */}
                            <p className="lorem_text">{product.desc} </p>
                            <p className='lorem_text'>{product.moreDesc}</p> 
                            <img src={require(`../images/${product.image}`)} alt={product.name} className='imagee' style={{width:"300px", alignContent:"center"}} />

                            <h1 className="bursh_text title">INGREDIENTS</h1>
                            <p className='lorem_text'>{product.ingredient}</p>


                            <h1 style={{paddingTop:"20px"}} className="bursh_text title">USAGE</h1>
                            <p>{product.usage}</p>
                            
                                    
                                  
                               </div>
                               
                            </div>
                            <form onSubmit={handleCart}>
                                <input type="hidden"   name="name" value={product.name} />
                                
                                  {product.salePrice ?
                                <input type="hidden"  name="salePrice" value={product.salePrice} /> 
                                  :
                                <input type="hidden"  name="price" value={product.price} /> 
                                }
                                <input type="hidden" name="quantity" value={product.quantity} />
                                <input type='hidden' name="image" value={product.image}  />
                                
                                <input type="hidden" name="id"  value={product._id}/>
                              
                              
                                <button style={{marginLeft:"50%", marginTop:"30px"}}>
                                <div className="btn btn-success" ><AddShoppingCartIcon /> Buy Now </div>  
                                </button>
                                
                              </form>
                              <div>
                              <h3  className="price_text1" > <span className="price_text sale-price">€{product.salePrice} &nbsp;</span><span className='price' style={{textDecoration:'line-through'}}>€{product.price}</span>  </h3>
                              
                              </div>

                         </div>
                  
    
    
             
              
          })}
                 
          
    
     
              </div>
           </div>

           <button><img className="gobackarrow" src={gobackarrow} alt="go back arrow" onClick={()=>{history.go(-1)}}/> </button>
           </div>
           
           </div>
      )
}

export default ProductDetail