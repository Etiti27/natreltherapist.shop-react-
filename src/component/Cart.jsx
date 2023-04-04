/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import UseFetch from './UseFetch'
import loader from '../images/loader-waiting.gif'
import DeleteIcon from '@mui/icons-material/Delete';
import BillingAddress from './ineffectiveComponents/BillingAddress';
import StripePayButton from './StripePayButton';
import  Form  from './ineffectiveComponents/Formik';
import axios from "axios";
import hairElixir from "../images/hairelixir.png"
import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import pointingDown from "../images/pointingDown.gif"


function Cart() {
  const url="http://localhost:3000/cart"
  const {products, error, isLoading}= UseFetch(url)
 
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
  
   
    const getTotal="http://localhost:3000/total"
    const postMinus="http://localhost:3000/minus"
    const postPlus="http://localhost:3000/plus"

    



    

    
    const handleCartSub =(e)=>{
      e.preventDefault()
      const id=e.target.id.value
      const quantity=e.target.quantity.value
      console.log(id, quantity, isDecrease, isIncrease);
      axios.post("http://localhost:3000/posted",{
        id,quantity,isDecrease,isIncrease
      })
      .then((res)=>{
        if(res.status===200){
          history.push('/cart')
          console.log(`i am checjed`);
          history.go('/cart')
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
    axios.post("http://localhost:3000/deletecart",{id, names})
    .then((res)=>{
      if(res.status===200){
        history.go("/cart");
      }
    })
    
  }  
   
    
  return (

   

    <div>

    
   
  
        <div><div>{isLoading && <p> <img src={loader} alt="Loadingimage"/> </p>} </div>
          
          <div>{error && <p>{error}</p>}</div></div>
         

  

    <section className="h-100 " style={{backgroundColor: "white"}}>
  <div className="container h-100 py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card shopping-cart" style={{borderRadius: "15px"}}>
          <div className="card-body text-black">
         
          
          {products && products.length >=1 ? products.map((product)=>{
            

return(<div>


            <div className="row">
              <div className="col-lg-6 px-5 py-4">

                <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Your products</h3>

                <div className="d-flex align-items-center mb-5">
                  <div className="flex-shrink-0">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"
                      className="img-fluid" style={{width: "150px"}} alt="Generic placeholder"/>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <a href="#!" class="float-end text-black"><i class="fas fa-times"></i></a>
                    <form onSubmit={deleteCart}>
                    <input type="hidden" name="id" value={product.id} />
                    <input type="hidden" name="name" value={product.names} />
                    
                      <h5 className="text-primary" >{product.names}       <span style={{paddingLeft:"20%"}}>
                      {console.log(product)}
                      <button ><DeleteIcon color="primary"/></button>
                      
                      </span></h5> 
                      </form>
                      <p>{product.desc}</p>
                      <div className="d-flex align-items-center">
                      <p className="fw-bold mb-0 me-5 pe-3">€ {product.salePrice}</p>
                      <div className="def-number-input number-input safari_only">
                      <form onSubmit={handleCartSub}>
                       
                       <input className="minus" name="decrease" type="submit" value="-" onClick={setMinus}/>
                        <input className="quantity fw-bold text-black" min="0" name="quantity" value={product.quantity} type='number' />
                        <input name="id" value={product.id} type="hidden"/>
                       
                       <input className="plus" type="submit" name="increase" value="+" onClick={setPlus}/>
                       </form>
                      </div>
                    </div>
                    <hr className="mb-4" style={{height: "2px", backgroundColor: "#1266f1", opacity: "1"}}/>
                   
                    {console.log(total)}
                    <h1 style={{paddingLeft:"10%"}}> Total:    <span style={{paddingLeft:"20%"}} > €{total}</span></h1>
                   
                  </div>
                </div>
              </div>
              <div className="col-lg-6 px-5 py-4">
              <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Shipping Address</h3>
              
                <Form 
                  cartItems={product}
                />

              </div>
            </div>
            </div>)

                                      
                   }) 
                   : <div><h1 className="mb-5 pt-2 text-center fw-bold text-uppercase transitional" style={{textAlign:"center", color:'red'}} >Oop! The Cart is empty</h1>
                   <h2 style={{textAlign:"center", color:'red'}}>click below to add products to cart</h2>
                   <br/>
                   <p style={{textAlign:"center"}}><img src={pointingDown} alt="pointing down"/></p>
                   
                  <h1 style={{ textAlign:"center"}}> <Link to="/"  style={{color:"white", borderRadius:"50px" }} className="empty-cart">Go To Cart</Link></h1>
                   
                   

                   </div>
                   }


          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  </div>
 
  
  )
  
  

        

         
   
  
}

export default Cart