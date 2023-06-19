import React, { useEffect, useState } from 'react'
import useFetch from '../UseFetch'
import loading from "../images/loader-waiting.gif";
import hairElixir from "../images/HairElixir.jpeg"
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import search from "@mui/icons-material/search";
import { Link } from 'react-router-dom';
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'
import axios from 'axios';
import { primaryURL, age } from '../Config';




function Products() {
   const url2=`${primaryURL}/data`

const url=`/data`
   const {products:items, isPending, error}=useFetch(url2)
   items&&items.map((item, i)=>{
      console.log(item);
      return <div key={item._id}>
  {/* {item.productName, item.productDescription} */}
      </div>
   })

   const productName=`HAIR ELIXER`
const productDescription=`There is nothing more satisfying than to have hair care technology that builds and strengthens your hair. With Sisay Cosmetics Golden Hair Elixer, you have just that, a rich 100% Natural Hair elixir that strengthens and adds shine to your precious hair.`;
const productMoreDescription=`the secret to thick, healthy, and beautiful hair. the main and one of the most potent ingredients in this elixir is cold-pressed fenugreek oil ( essential oil). this potent plant possesses benefits catering specifically to hair.Fenugreek (Trigonella foenum-graecum). It has a 6000-year history and is commonly called Methi, high concentration of beneficial elements such as Vitamins A, B, and C, as well as phosphates, flavonoids, iron, saponins, and other minerals.It is rich in vitamins A, K, and C, folic acid, potassium, iron, calcium, and proteins, all of which are cornerstones for hair growth.`;

const products=[{
id:1,
price:50,
salePrice:25,
quantity:1
}]

const[names, setNames]=useState(productName)
const [price, setPrice]=useState(products[0].price)
const [salePrice, setSalePrice]=useState(products[0].salePrice)
const [quantity, setQuantity]=useState(products[0].quantity)
const handleCart=(e)=>{
   e.preventDefault()
   setNames(productName);
   setPrice(products[0].price);
   setSalePrice(products[0].salePrice);
   setQuantity(products[0].quantity);

   const allProducts ={
      names,
      price,
      salePrice,
      quantity

   }
const url="http://localhost:3000/cart"
const url3=`${primaryURL}/cart`;
axios.post(url3,allProducts)
 .then(function (response) {
   if(response.status===200){
      console.log(response.data);
   }
   
 })
 .catch(function (error) {
   console.log(error);
 })};
  return (
    <div class="product_section layout_padding">
    <div class="container">
   
       <div class="row">
          <div class="col-sm-12">       
           return  <div >
           <h1 class="product_taital title">Our Products</h1>
            return <div class="col-lg col-sm">
                     <div className="product_box">
                        <h3 className="bursh_text title">{productName}</h3>
                        <p className="lorem_text">{productDescription} </p>
                        <p>{productMoreDescription}</p> <span><Link to="/productdetails" className="btn btn-light read-more">Read More</Link></span>
                        <img src={hairElixir} alt="Hair elixir" className="image_1"/>
                        <div className="">
                           <div className="buy_bt">
                     <div className="flex">
                      <form onSubmit={handleCart}>
                      
                        <input type="hidden"   name="name" value={names} />
                        {products.salePrice ?
                         <input type="hidden"  name="price" value={salePrice} /> 
                         :
                         <input type="hidden"  name="price" value={price} /> 
                         }
                         <input type="hidden" name="quantity" value={quantity} />
                         <input type="hidden" name="image" value={hairElixir}/>
                         {/* <input type="hidden" name="id"  value={products.id}/> */}

                         
                         <button className='btn  addtocartbutton ' >
                         
                                  <AddShoppingCartIcon color='primary'/>
                              
                              </button>
                             {/* <button >add to cart</button> */}
                      </form>
                      
                     {products.map((product) =>{
                       return <div>
                           <h3 className="price_text" > Price:  <span style={{textDecoration:'line-through'}}>£{product.price}</span></h3>
                           <h3 className="price_text" > Sales Price: £{product.salePrice}</h3>
                           </div>
                     })}
                           
                          
                           
                    
                     </div>
                              
                            
                                
                              
                           </div>
                          
                          
                           
                        </div>
                     </div>
                  </div>
        
          


         
          </div>
  
             

             
          </div>
       </div>
      
       </div>
       </div>
  )
}

export default Products