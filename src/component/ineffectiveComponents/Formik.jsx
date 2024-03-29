import React from 'react'
import {Formik, Form, Field,ErrorMessage} from "formik"
import * as Yup from "yup"
import axios from 'axios';
import { useHistory} from "react-router-dom"



function Forms({cartItems}) {
    const history= useHistory()
    


    const submit= (data)=>{
        console.log(data);
        console.log(cartItems);
        const allData={...data, 
            ...cartItems}
       

    const url=`http://localhost:3000/create-checkout-session`
    axios.post(url, [allData])
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
    .max(15, "too much")
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
             <option disabled value>choose your country</option>
             <option value="USA">USA</option>
             <option value="Belgium">Belgium</option>
             <option value="Netherlands">Netherlands</option>
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
            <label>postal (ZIP) Code :</label>
            <ErrorMessage name="postalCode" component="aside"/>
            <Field 
               
                name="postalCode"
                placeholder="Enter Postal or Zip Code"
                id="postCode"
                className="form-control"
                
            />
            </div>
            </div>
            <button className="btn proceed-to-payment" type="submit"  >Proceed To Payment</button>
        
        </Form>
    </Formik>

    </div>
  )
}

export default Forms