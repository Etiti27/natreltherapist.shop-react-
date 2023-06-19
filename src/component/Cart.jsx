
import React from 'react'
import UseFetch from './UseFetch'
import loader from '../images/loader-waiting.gif'
import DeleteIcon from '@mui/icons-material/Delete';
import BillingAddress from './ineffectiveComponents/BillingAddress';
import StripePayButton from './StripePayButton';
import  Form  from './ineffectiveComponents/Formik';
import axios from "axios";
import Nav from './Nav';

import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import pointingDown from "../images/pointingDown.gif";


import gobackarrow from "../images/gobackarrow.gif";
import { primaryURL, age } from './Config';


function Cart() {
  const cartURL=`${primaryURL}/cart`
 
  const {products, error, isPending:isLoading}= UseFetch(cartURL)
  console.log(products);
  // console.log(Object.keys(products).length)

 
const history= useHistory()

  
  
    const [isDecrease, setDecrease]=useState(false)
    const [isIncrease, setIncrease]=useState(false)
   
  const setMinus=()=>{
    setIncrease(false)
    setDecrease(true)
    
  }

  const setPlus=()=>{
    setIncrease(true)
    setDecrease(false)
  }
  
  
  
    
    

    




    
    const handleCartSub =(e)=>{
      e.preventDefault()
      const id=e.target.id.value
      const quantity=e.target.quantity.value
      console.log(id, quantity, isDecrease, isIncrease);
      const postedURL=`${primaryURL}/posted`;
      

      axios ({
        method: 'POST',
        data:{id,quantity,isDecrease,isIncrease},
        withCredentials:true,
        url:postedURL
    }
    ).then((res)=>{
        if(res.status===200){
          history.go('/cart')
          
          console.log(`i am checjed`);
          
        }
      })
      
     
   
    }


   
  const deleteCart=(e)=>{
    e.preventDefault()
    const id=e.target.id.value;
    const names=e.target.name.value
    console.log(id);
    console.log(names);
   
    const deleteURL=`${primaryURL}/deletecart`
   axios({
    method: 'POST',
    data:{id, names},
    url:deleteURL,
    withCredentials:true

   }).then((res)=>{
      if(res.status===200){
        history.go('/cart');
        
      }
    })
    
  }  
   
    
  return (

   

    <div >

<div>{error && <p>{error}</p>}</div>
   
  
        <div className='loading'>{products ===null || isLoading ? <p > <img  src={loader} alt="Loadingimage" style={{width:"100%"}}/> </p>:<div className='flex-containe'>
    <section className=" big-item " style={{backgroundColor: "white"}}>
  <div className="container">
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col">
        <div className="card shopping-cart" style={{borderRadius: "0.9375rem"}}>
          <div className="card-body text-black"> 
          {products.cart.length ===0 ?
            <div style={{width: "100%", height: "100%"}}><h1 className="mb-5 pt-2 text-center fw-bold text-uppercase transitional" style={{textAlign:"center", color:'red'}} >Oop! The Cart is empty</h1>
                   <h2 style={{textAlign:"center", color:'red'}}>click below to add products to cart</h2>
                   <br/>
                   <p style={{textAlign:"center"}}><img src={pointingDown} alt="pointing down"/></p>
                   
                  <h1 style={{ textAlign:"center"}}> <Link to="/"  style={{color:"white", borderRadius:"50px" }} className="empty-cart">Go To Cart</Link></h1>
                   
                   

                   </div> :
          <div>
          <h1 style={{marginTop:"0%"}} className="mb-5 pt-2 text-center fw-bold text-uppercase">CART</h1>
         
          
          {products.cart.map((product,i)=>{
            return (
              <div>


            <div className="row ">
              <div className="col">
           

                {/* <div className="d-flex align-items-center"> */}
                <table class="table table-striped">
  
  <tbody>
    <tr scope='row'>
      <th style={{border:"none"}} scope="row">{i + 1}</th>
      <td style={{border:"none"}}><img src={require(`../images/${product.image}`)} alt={product.name} className="img-fluid" style={{width: "60px", borderRadius:"50%"}}/></td>
      <td style={{border:"none"}}><div >{product.name}</div></td>
      <td style={{border:"none"}}> €{parseFloat(product.salePrice).toFixed(2)}</td>
      <td style={{border:"none"}}> <div className="">
                    <a href="#!" class="k"><i class="fas fa-times"></i></a>
                    
                      
                      <div className="">
                      
                      <div className="def-number-input number-input safari_only">
                      <form onSubmit={handleCartSub}>
                       
                       <input className="minus" name="decrease" type="submit" value="-" onClick={setMinus}/>
                        <input className="quantity fw-bold text-black" min="0" style={{fontSize:"10px"}} name="quantity" value={product.quantity} type='number' />
                        <input name="id" value={product.id} type="hidden"/>
                       
                       <input className="plus" type="submit" name="increase" value="+" onClick={setPlus}/>
                       </form>
                      </div>
                    </div>

                   
                   
                  </div></td>
                  <td style={{border:"none"}}><div>€ {parseFloat(product.salePrice * product.quantity).toFixed(2)}</div> </td>
                  <td style={{border:"none"}}><form onSubmit={deleteCart}>
                    <input type="hidden" name="id" value={product.id} />
                    <input type="hidden" name="name" value={product.names} />
                    
                      <h5 className="text-primary" >{product.names}       <span style={{paddingLeft:"20%"}}>
                     
                      <button ><DeleteIcon color="primary"/></button>
                      
                      </span></h5> 
                      </form></td>
    </tr>
  </tbody>
</table>
         
              </div>
              
            </div>
            </div>

            )
          })
           
           

    
                                      
                    }
                  
                
                    
                    <div> <hr className="mb-4" style={{height: "2px", backgroundColor: "#1266f1", opacity: "1"}}/>
                   
                   
                    <h1 style={{}}> Total:    <span style={{float:"right", color:"#008037"}} > € {parseFloat(products.total).toFixed(2)}</span></h1>
                 </div>
                
                 <div className="col-lg px-5 py-4 small-item" >
              <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Shipping Address</h3>            
                <Form                 
                  cartItems={products}
                />
                
              </div>
          
                 </div>
          
                   
        }
          </div>
          
        </div>
        
      </div>
      
    </div>
  
  </div>
</section>




  


              </div>} </div>
          
         
          
         



<button><img className="gobackarrow" src={gobackarrow} alt="go back arrow" onClick={()=>{history.go(-1)}}/> </button>

</div>

  )
}

export default Cart