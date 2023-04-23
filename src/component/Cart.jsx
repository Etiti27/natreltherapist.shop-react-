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
import pointingDown from "../images/pointingDown.gif";
// import image1 from '../images/HairElixir3.png';
// import image2 from '../images/dailytoxin.png';


function Cart() {
  const url="http://localhost:3000/cart"
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
  
   
    const getTotal="http://localhost:3000/total"
    

    


const subtotal=()=>{

}

    
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
    axios.post("http://localhost:3000/deletecart",{id, names})
    .then((res)=>{
      if(res.status===200){
        history.go("/cart");
      }
    })
    
  }  
   
    
  return (

   

    <div>

    
   
  
        <div>{isLoading && <p > <img  src={loader} alt="Loadingimage" style={{width:"100px"}}/> </p>} </div>
          
          <div>{error && <p>{error}</p>}</div>
         

<div className='flex-container'>
    

    <section className="h-100 big-item " style={{backgroundColor: "white"}}>

  <div className="container h-100 py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card shopping-cart" style={{borderRadius: "15px"}}>
          <div className="card-body text-black">
          
         
          {products && products.length === 0 ?
            <div><h1 className="mb-5 pt-2 text-center fw-bold text-uppercase transitional" style={{textAlign:"center", color:'red'}} >Oop! The Cart is empty</h1>
                   <h2 style={{textAlign:"center", color:'red'}}>click below to add products to cart</h2>
                   <br/>
                   <p style={{textAlign:"center"}}><img src={pointingDown} alt="pointing down"/></p>
                   
                  <h1 style={{ textAlign:"center"}}> <Link to="/"  style={{color:"white", borderRadius:"50px" }} className="empty-cart">Go To Cart</Link></h1>
                   
                   

                   </div> :
          
          products && products.map((product)=>{
           
            <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">CART</h3>

    return(<div>


            <div className="row ">
              <div className="col-lg-6 px-5 py-4">
           
                

                <div className="d-flex align-items-center mb-5">
            <table style={{width: "100%",}}>
            <tr>
              <th >name</th>
              <th><input type="hidden" /></th>
              <th>Sale Price</th>
              <th><input type="hidden" /></th>

           
              <th style={{marginLeft:'20px'}}>Subtotal</th>
              <th><input type="hidden" /></th>
              
              
            </tr>
            <tr>
              <td><div className="flex-shrink-0"><img src={product.image} className="img-fluid" style={{width: "60px", borderRadius:"50%"}} alt="product placeholder"/></div></td>
              <td><div >{product.name}</div></td>
              <td><p className="fw-bold mb-0 me-5 pe-3">€{product.salePrice}.00</p></td>
              
              <td> <div className="flex-grow-1 ms-3">
                    <a href="#!" class="float-end text-black"><i class="fas fa-times"></i></a>
                    
                      
                      <div className="d-flex align-items-center">
                      
                      <div className="def-number-input number-input safari_only">
                      <form onSubmit={handleCartSub}>
                       
                       <input className="minus" name="decrease" type="submit" value="-" onClick={setMinus}/>
                        <input className="quantity fw-bold text-black" min="0" name="quantity" value={product.quantity} type='number' />
                        <input name="id" value={product.id} type="hidden"/>
                       
                       <input className="plus" type="submit" name="increase" value="+" onClick={setPlus}/>
                       </form>
                      </div>
                    </div>

                   
                   
                  </div></td>
              <td><div>{product.salePrice * product.quantity}</div> </td>
              <td><form onSubmit={deleteCart}>
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

                                      
                   }) 
                   
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


{total !==0 ?
 <div className="col-lg px-5 py-4 small-item" >
              <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Shipping Address</h3>
              

             
                <Form 
                
                  cartItems={products}
               
                />
              {console.log(products)}
              
                
              </div>:null}
  




</div>


  </div>


 
  
  )
  
  

        

         
   
  
}

export default Cart