import React, {useState} from 'react'
import Axios from 'axios'
import { primaryURL } from '../../Config';
import { Link, useHistory } from 'react-router-dom';

function Login() {
const history = useHistory()
const [username, setUsername]=useState('') 
const [exposePass, setExposePass] = useState(false)
const [password, setPassword]=useState('')
const [foundUser,setFoundUser]=useState(false)
const [noUser, setNoUser]=useState(false)
const handleLogin =(e)=>{
    e.preventDefault()

const userPassword={username, password}
console.log(userPassword);
const url=`${primaryURL}/login`
const url2= 'http://localhost:3000/login'
Axios({
    method: "POST",
    data: userPassword,
    withCredentials: true,
    url: url,
  }).then((res) => {
    console.log(res);
    if(res.status!==200){
        setFoundUser(true)
    }
    if(res.data==='not admin'){
       
        history.replace('/')
    }
    if(res.data==='admin'){
        setFoundUser(false)
    history.replace('/adminsection')
    }
  }).catch((err) => {
    setFoundUser(true)
    console.log(err.message)});
};



const checker=(e)=>{
   const getPassword=document.getElementById('password');
   const isChecked=e.target.checked;
   
   if(isChecked){
    getPassword.type = 'text'
   }else{
    getPassword.type = 'password'
   }
    
}

const eye='https://static.vecteezy.com/system/resources/thumbnails/006/086/018/small/preview-show-interface-icon-free-vector.jpg'
const closeEye='https://thumbs.dreamstime.com/b/show-password-icon-eye-symbol-vector-vision-hide-watch-secret-view-web-design-element-235614968.jpg'
  const settingUsername=(e)=>{
    setUsername(e.target.value)
  }

  const settingPassword=(e)=>{
    setPassword(e.target.value)
  }

return (
    <div className="text-center" >
   <h1 className="title">Login</h1>
   <br />
   <br />

   <form onSubmit={handleLogin} style={{textAlign: 'center', paddingLeft: '30%',paddingBottom: '3%'}}>
   

   <div className="row">
        <div className="col-md-6 mb-3">
            
            
            <input
               
                name="username"
                placeholder="Username"
                id="email"
                type="text"
                className="form-control"
                onChange={settingUsername}
                value={username}
                
            />
            </div>
            </div>
            <br />
            <div className="row">
            <div className="col-md-6 mb-3">
           
           
            <input 
               
                name="password"
                placeholder="password"
                id="password"
                 type='password'
                className="form-control"
                onChange={settingPassword}
                value={password}
                
            />
            
            </div>
           
             
    </div>
    <input type='checkbox'  onChange={checker} /> Show Password
    <br />
    <button className="btn btn-success">login</button>
    
    </form>
    {foundUser && <div  style={{color:'red', fontStyle:'italic', textAlign:'center', paddingTop:'-20px'}}>oops! username and password doesn't match</div>}
    {noUser && <div style={{fontSize:"15px",color:'red', fontStyle:'italic', textAlign:'center', paddingTop:'-20px'}} >Oops!! Username is not Found or Password Mismatched. Enter Correct Password or Click to  <Link style={{color:'green'}} to='/register'>Register</Link></div>}
    </div>
  )
}

export default Login