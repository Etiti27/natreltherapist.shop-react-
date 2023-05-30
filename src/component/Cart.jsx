
import React from 'react'
import UseFetch from './UseFetch'
import loader from '../images/loader-waiting.gif'
import DeleteIcon from '@mui/icons-material/Delete';
import BillingAddress from './ineffectiveComponents/BillingAddress';
import StripePayButton from './StripePayButton';
import  Form  from './ineffectiveComponents/Formik';
import axios from "axios";

import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import pointingDown from "../images/pointingDown.gif";


import gobackarrow from "../images/gobackarrow.gif";
import { primaryURL, age } from '../../Config';


function Cart() {
  const url=`${primaryURL}/cart`
  const {products, error, isLoading}= UseFetch(url)
  console.log(products);
 
const history= useHistory()




  const [total, setTotal]= useState()
  
  
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
  
   
    const getTotal=`${primaryURL}/total`
    

    




    
    const handleCartSub =(e)=>{
      e.preventDefault()
      const id=e.target.id.value
      const quantity=e.target.quantity.value
      console.log(id, quantity, isDecrease, isIncrease);
      axios.post(`${primaryURL}/posted`,{
        id,quantity,isDecrease,isIncrease
      })
      .then((res)=>{
        if(res.status===200){
          history.go('/cart')
          
          console.log(`i am checjed`);
          
        }
      })
      
     
   
    }


    axios.get(getTotal)
    .then((res)=>{
      const total=res.data
      setTotal (total)
      
    })
    
  const deleteCart=(e)=>{
    e.preventDefault()
    const id=e.target.id.value;
    const names=e.target.name.value
    console.log(id);
    console.log(names);
    axios.post(`${primaryURL}/deletecart`,{id, names})
    .then((res)=>{
      if(res.status===200){
        history.go('/cart');
        
      }
    })
    
  }  
   
    
  return (

   

    <div >

    
   
  
        <div>{isLoading && <p > <img  src={loader} alt="Loadingimage" style={{width:"100%"}}/> </p>} </div>
          
          <div>{error && <p>{error}</p>}</div>
         

<div className='flex-container'>
    

    <section className=" big-item " style={{backgroundColor: "white"}}>

  <div className="container">
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col">
        <div className="card shopping-cart" style={{borderRadius: "0.9375rem"}}>
          <div className="card-body text-black">
          
         
          {products && products.length === 0 || products===null ?
            <div><h1 className="mb-5 pt-2 text-center fw-bold text-uppercase transitional" style={{textAlign:"center", color:'red'}} >Oop! The Cart is empty</h1>
                   <h2 style={{textAlign:"center", color:'red'}}>click below to add products to cart</h2>
                   <br/>
                   <p style={{textAlign:"center"}}><img src={pointingDown} alt="pointing down"/></p>
                   
                  <h1 style={{ textAlign:"center"}}> <Link to="/"  style={{color:"white", borderRadius:"50px" }} className="empty-cart">Go To Cart</Link></h1>
                   
                   

                   </div> :
          <div>
          <h1 style={{marginTop:"0%"}} className="mb-5 pt-2 text-center fw-bold text-uppercase">CART</h1>
          {/* {console.log(products)} */}
          {products && products.length > 0 && products.map((product)=>{
           
           

    return(<div>


            <div className="row ">
              <div className="col">
           
                

                <div className="d-flex align-items-center">
            <table style={{width:"100%",border:"none"}} className='insideD'>
            <tr style={{color:'white', backgroundColor:'green'}}>
              <th style={{border:"none"}}>name</th>
              <th style={{border:"none"}}><input type="hidden" /></th>
              <th style={{border:"none"}}>Sale Price</th>
              <th style={{border:"none"}}><input type="hidden" /></th>
           
              <th style={{border:"none"}} >Subtotal</th>
              <th style={{border:"none"}}><input type="hidden" /></th>
              
              
            </tr>
            <tr>
              <td style={{border:"none"}}><img src={require(`../images/${product.image}`)} alt={product.name} className="img-fluid" style={{width: "60px", borderRadius:"50%"}}/></td>
              <td style={{border:"none"}}><div >{product.name}</div></td>
              
              <td style={{border:"none"}}><p className="fw-bold mb-0 me-5 pe-3">  €{product.salePrice}</p></td>
              
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
              <td style={{border:"none"}}><div>{product.salePrice * product.quantity}</div> </td>
              <td style={{border:"none"}}><form onSubmit={deleteCart}>
                    <input type="hidden" name="id" value={product.id} />
                    <input type="hidden" name="name" value={product.names} />
                    
                      <h5 className="text-primary" >{product.names}       <span style={{paddingLeft:"20%"}}>
                     
                      <button ><DeleteIcon color="primary"/></button>
                      
                      </span></h5> 
                      </form></td>
            </tr>
              
            </table>
                  
                  
                 
                </div>
              </div>
              
            </div>
            </div>)

                                      
                   }) }
                   </div>
                   
                   }
                
                    
                   {products && products.length !== 0 ? <div> <hr className="mb-4" style={{height: "2px", backgroundColor: "#1266f1", opacity: "1"}}/>
                   
                   
                    <h1 style={{paddingLeft:"10%"}}> Total:    <span style={{paddingLeft:"20%"}} > €{total}</span></h1>
                 </div>:null }
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{total !==0  && products !==null?
 <div className="col-lg px-5 py-4 small-item" >
              <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Shipping Address</h3>
              

             
                <Form 
                
                  cartItems={products}
               
                />
              {console.log(products)}
              
                
              </div>:null}
  


              </div>

<button><img className="gobackarrow" src={gobackarrow} alt="go back arrow" onClick={()=>{history.go(-1)}}/> </button>

</div>

  )
}

export default Cart