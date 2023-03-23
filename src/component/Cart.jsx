/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import UseFetch from './UseFetch'
import loader from '../images/loader-waiting.gif'
import DeleteIcon from '@mui/icons-material/Delete';
import BillingAddress from './ineffectiveComponents/BillingAddress';
import StripePayButton from './StripePayButton';
import  Form  from './ineffectiveComponents/Formik';


function Cart() {
    const url="http://localhost:3000/cart"
    const {products, error, isLoading}= UseFetch(url)
    
   
    
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
          {products && products.map((product)=>{

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
               
                      <h5 className="text-primary" >{product.names}       <span style={{paddingLeft:"20%"}}><button><DeleteIcon color="primary"/></button></span></h5> 
                      <p>{product.desc}</p>
                      <div className="d-flex align-items-center">
                      <p className="fw-bold mb-0 me-5 pe-3">€ {product.salePrice}</p>
                      <div className="def-number-input number-input safari_only">
                        <button
                          className="minus"></button>
                        <input className="quantity fw-bold text-black" min="0" name="quantity" value="1"
                          type="number"/>
                        <button 
                          className="plus"></button>
                      </div>
                    </div>
                    <hr className="mb-4" style={{height: "2px", backgroundColor: "#1266f1", opacity: "1"}}/>
                   
                    
                    
                   
                  </div>
                </div>
              </div>
              <div className="col-lg-6 px-5 py-4">

              
                <Form 
                  cartItems={product}
                />

              </div>
            </div>
            </div>)

                                      
                   })} 

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  </div>)

          {/* /*cart section*/}

         
   
  
}

export default Cart