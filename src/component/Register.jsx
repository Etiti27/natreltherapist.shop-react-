import React, {useState} from 'react'
import {Formik, Form, Field,ErrorMessage} from "formik"
import * as Yup from "yup"
import Axios from 'axios';
import { useHistory} from "react-router-dom"
import { primaryURL, age } from './Config';



function Register() {
  const [foundUser, setFoundUser]= useState(false)
    const history= useHistory()
   const url='http://localhost:3000/register'
    const url2=`${primaryURL}/user/register`
    const handleSubmit =(data)=>{
     console.log(data);
     Axios({
        method: "POST",
        data: data,
        withCredentials: true,
        url: url2,
      }).then((res) => {
        console.log(res);
        if(res.status!==200){
            setFoundUser(true)
        }if(res.data==='registered'){
            setFoundUser(false)
            alert('user is now registered, pls login')
       setTimeout(() => {
        history.replace('/login')
       }, 2000) 
        }
       
        
      }).catch((err) => {throw err});
    };





    //  axios.post(url, data, {withCredentials:true})
    //  .then((res)=>{
    //     console.log(res.user);
    //   if(res.data==="username or Exist exist!"){
    //     setFoundUser(true)
        
        
    //   }else {
    //     setFoundUser(false)
    //     history.replace('/adminsection')

    //   };
    //  })
    //  .catch((err)=>{
    //   throw err
    //  })
     
    
   
   
   
    
    


    
   
const initialValues={
    name:"",
    email:"",
    country:"",
    city:"",
    username:"",
    password:"",
    confirmPassword:"",
    phone:""
};
const validationSchema=Yup.object().shape({
    name:Yup.string()
    .min(3, "too small")
    .max(30, "too much")
    .required("Please Input Your Name"),

    email:Yup.string()
    .email("invalid email")
    .min(3, "too small")
    .max(30, "too much")
    .required("Please Input Your Email Address"),

    phone:Yup.string()
    .min(3, "too small")
    .max(50, "too much")
    .required("Enter Your Phone Number"),
    
    country:Yup.string()
    .min(3, "too small")
    .max(30, "too much")
    .required("Choose Your Country"),

    city:Yup.string()
    .min(3, "too small")
    .max(15, "too much")
    .required("Enter Your City"),

    username:Yup.string()
    .min(3, "too small ")
    .max(30, "too much")
    .required("Enter a Unique username"),

   

    password: Yup
    .string()
    .required('Please Enter your password')
    .min(8, "must contain up to 8 characters"),
  confirmPassword: Yup
    .string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match")


})


  return (
    <div style={{padding:"20px"}}>
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema} >
        <Form>
        <div className="row">
        <div className="col-md-6 mb-3">
            <label>Name:</label>
            <ErrorMessage name="name" component="aside"/>
            <Field
               
                name="name"
                placeholder="Name"
                id="name"
                type="text"
                className="form-control"
                
            />
            </div>
            <div className="col-md-6 mb-3">
           <label>Username :</label>
           <ErrorMessage name="username" component="aside"/>
            <Field 
               
                name="username"
                placeholder="Choose Unique Username"
                id="username"
                className="form-control"
               
            />
            </div>
            {/* <div className="col-md-6 mb-3">
             <label>Last Name:</label>
             <ErrorMessage name="lastName" component="aside"/>
            <Field
                
                name="lastName"
                placeholder="Enter Your Last Name"
                id="lastName"
                type='text'
                className="form-control"
            
            />
            </div> */}
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
             <label>Phone Number:</label>
             <ErrorMessage name="phone" component="aside"/>
            <Field 
                
                name="phone"
                placeholder="Enter Your Phone Number"
                id="phone"
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
            <label>Password :</label>
            <ErrorMessage name="password" component="aside"/>
            <Field 
               
                name="password"
                placeholder="Choose your password"
                id="password"
                type="password"
                className="form-control"
                
            />
            </div>
            <div className="col-md-6 mb-3">
            <label>Confirm Password :</label>
            <ErrorMessage name="confirmPassword" component="aside"/>
            <Field 
               
                name="confirmPassword"
                placeholder="Confirm password"
                id="confirmPassword"
                type="password"
                className="form-control"
                
            />
            </div>
            {/* <div className="col-md-6 mb-3">
           <label>Username :</label>
           <ErrorMessage name="username" component="aside"/>
            <Field 
               
                name="username"
                placeholder="Choose Unique Username"
                id="username"
                className="form-control"
               
            />
            </div> */}
            </div>
            {foundUser && <div style={{color:'red', fontStyle:'italic', textAlign:'center'}}> Sorry!  USERNAME or EMAIL already exist in our database,  choose a unique USERNAME and EMAIL</div>}
            <button className="btn proceed-to-payment" type="submit"  >Register</button>
        
        </Form>
    </Formik>

    </div>
  )
}

export default Register