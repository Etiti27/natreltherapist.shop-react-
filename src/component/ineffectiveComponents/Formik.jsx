import React from 'react'
import {Formik, Form, Field,ErrorMessage} from "formik"
import * as Yup from "yup"
import axios from 'axios';
import { useHistory} from "react-router-dom"
import { primaryURL, age } from '../Config';



function Forms({cartItems}) {
    const history= useHistory()
    console.log(cartItems && cartItems.cart);
    const firstProduct= cartItems && cartItems[0]
    const secondProduct= cartItems && cartItems[1]
    
  
    
    
const cartInf=cartItems !==null && Object.keys(cartItems).length >0 && cartItems.cart.map((cartItem)=>{
    return cartItem
})
console.log(cartInf);
    const submit= (data)=>{
        // console.log(data);
        
        const allData=[data, cartInf]
           
    const url2= 'http://localhost:3000/create-checkout-session'
    const url=`${primaryURL}/create-checkout-session`;
    axios.post(url, 
        allData, 
        {withCredentials: true})
    .then((res)=>{
      console.log(res);
      if(res.status===200){
        console.log(res.data.datas[0]);
        window.location.replace(res.data.url);
        // history.push(res.data)
        
        
      }
    }).catch((err)=>{
      console.log(err.message);
    })
        }
   
const initialValues={
    firstName:"",
    lastName:"",
    email:"",
    address:"",
    country:"",
    city:"",
    postalCode:"",
};
const validationSchema=Yup.object().shape({
    firstName:Yup.string()
    .min(3, "too small")
    .max(15, "too much")
    .required("Please Input Your First Name"),

    lastName:Yup.string()
    .min(3, "too small")
    .max(15, "too much")
    .required("Please Input Your Last Name"),

    email:Yup.string()
    .email("invalid email")
    .min(3, "too small")
    .max(30, "too much")
    .required("Please Input Your Email Address"),

    address:Yup.string()
    .min(3, "too small")
    .max(50, "too much")
    .required("Enter Your Address"),
    
    country:Yup.string()
    .min(3, "too small")
    .max(30, "too much")
    .required("Choose Your Country"),

    city:Yup.string()
    .min(3, "too small")
    .max(15, "too much")
    .required("Enter Your City"),

    postCode:Yup.number()
    .min(3, "too small ")
    .max(7, "too much")
})


  return (
    <div>
    <Formik initialValues={initialValues} onSubmit={submit} validationSchema={validationSchema} >
        <Form>
        <div className="row">
        <div className="col-md-6 mb-3">
            <label>First Name:</label>
            <ErrorMessage name="firstName" component="aside"/>
            <Field
               
                name="firstName"
                placeholder="First Name"
                id="firstName"
                className="form-control"
                
            />
            </div>
            <div className="col-md-6 mb-3">
             <label>Last Name:</label>
             <ErrorMessage name="lastName" component="aside"/>
            <Field
                
                name="lastName"
                placeholder="Enter Your Last Name"
                id="lastName"
                className="form-control"
            
            />
            </div>
         </div>
         <div className="row">
         <div className="col-md-6 mb-3">
             <label>Email Address:</label>
             <ErrorMessage name="email" component="aside"/>
            <Field
                
                name="email"
                placeholder="Enter Your Email Address"
                id="email"
                className="form-control"
               
            />
            </div>
            <div className="col-md-6 mb-3">
             <label>Address:</label>
             <ErrorMessage name="address" component="aside"/>
            <Field 
                
                name="address"
                placeholder="Enter Your Address"
                id="address"
                className="form-control"
                
            />
            </div>
             
         </div>
         <div className="row">
         <div className="col-md-6 mb-3">
             <label>Country:</label>
             <ErrorMessage name="country" component="aside"/>
             <Field as="select" name="country"   placeholder="Country" id="country" className="form-control">
             <option disabled value>select your country</option>
             <option value="Austria">Austria</option>
             <option value="Belgium">Belgium</option>
             <option value="Bulgaria">Bulgaria</option>
             <option value="Croatia">Croatia</option>
             <option value="Republic of Cyprus">Republic of Cyprus</option>
             <option value="Czech Republic">Czech Republic</option>
             <option value="Denmark">Denmark</option>
             <option value="Estonia">Estonia</option>
             <option value="Finland">Finland</option>
             <option value="France">France</option>
             <option value="Germany">Germany</option>
             <option value="Greece">Greece</option>
             <option value="Hungary">Hungary</option>
             <option value="Ireland">Ireland</option>
             <option value="Italy">Italy</option>
             <option value="Latvia">Latvia</option>
             <option value="Lithuania">Lithuania</option>
             <option value="Luxembourg">Luxembourg</option>
             <option value="Malta">Malta</option>
             <option value="Netherlands">Netherlands</option>
             <option value="Poland">Poland</option>
             <option value="Portugal">Portugal</option>
             <option value="Romania">Romania</option>
             <option value="Slovakia">Slovakia</option>
             <option value="Slovenia">Slovenia</option>
             <option value="Spain">Spain</option>
             <option value="Sweden">Sweden</option>
             <option value="United Kingdom">United Kingdom</option>
             <option value="United States">United States</option>
             

           </Field>
           </div>

           <div className="col-md-6 mb-3">
           <label>City :</label>
           <ErrorMessage name="city" component="aside"/>
            <Field 
               
                name="city"
                placeholder="Enter Your City"
                id="city"
                className="form-control"
               
            />
            </div>
    </div>
    <div className="row">
    <div className="col-md-6 mb-3">
            <label>Postal (ZIP) Code :</label>
            <ErrorMessage name="postalCode" component="aside"/>
            <Field 
               
                name="postalCode"
                placeholder="Enter Postal or Zip Code"
                id="postCode"
                className="form-control"
                
            />
            </div>
            </div>
            <button style={{float:"right"}} className="btn proceed-to-payment" type="submit"  >Proceed To Payment</button>
        
        </Form>
    </Formik>

    </div>
  )
}

export default Forms