import React, {useState, useEffect} from 'react';
import { Link, useHistory, useParams} from "react-router-dom";
import userIcon from "../images/user-icon.png";
import logo from "../images/logo1.jpeg"
import logo2 from "../images/logo2.png"
import toggle from "../images/toggle-icon.png";
import bagIcon  from "../images/bag-icon.png";
// import search from "../images/search-icon.png"
import NatrelLogo from "../images/Whitengreen.png"
import "../css/style.css"
import axios from 'axios'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import shopcart from '../images/shopping-cart.png'
import shopbag from '../images/shopping-bag.png'

import IconButton from '@mui/material/IconButton';
import Search from '@mui/icons-material/Search';
import { primaryURL, age } from './Config';
import Forms from './ineffectiveComponents/Formik';


function Nav ({item}) {
  const history= useHistory()
  let {name}= useParams()
  const [search, setSearch]=useState("");
  const [istrue, setIsTrue]=useState(false)
  const [carts, setCarts]=useState(0)
  const cartURL=`${primaryURL}/cart`
  
axios({
  method: "GET",
  withCredentials:true,
  url:cartURL
}).then((res)=>{
 setCarts(res.data.cartLength);
})


  const clickedd=()=>{
    setTimeout(()=>{setIsTrue(true)}, 2000)
  }
  const handleSearch=(e)=>{
    
    setSearch(e.target.value)
    console.log(search);

  }

  const handleSearchSubmit=(e)=>{
    e.preventDefault();
    console.log(search);
    const searchURL=`${primaryURL}/searcheditem`;

    axios({
      method: "POST",
      withCredentials:true,
      url:searchURL,
      data:{search}
    })
    .then((res)=>{
      if(res.status===200){
        setSearch("")
        history.push(`/searchfound/found`)
      }
    })
    .catch((err)=>{
      throw err
    })

  }
  const clicked=(e)=>{console.log(e.target);}
  return (
   <div> 

   
 
   <nav className="navbar bg-body-tertiary  home-route">
  <div class="container-fluid">
    <Link className="navbar-brand logo" to="/"><img className='' src={logo} alt="logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title " id="offcanvasNavbarLabel"><img style={{width:'2.5rem'}} src={logo} alt='logo'/>  NA'TREL THERAPY SHOP</h5>
        <button type="button" className="btn-close" data-bs-dismiss= "offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body" >
      <div className="offcanvas-body" onClick={clickedd} data-bs-dismiss={istrue && "offcanvas"}>
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link  className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
          
            <Link className="nav-link" to="/cart"> <img style={{width:"10%", padding:"-20px"}} src={shopcart}/><span style={{fontSize: '15px', color:"black",margin:"2%", textAlign:"justify"}}>{carts}</span> </Link>
          </li>
          <li class="nav-item" data-bs-target="#sidenav-collapse-main" data-bs-
      toggle="collapse">
            <Link  className="nav-link" to="/about">About Us</Link> 
           
          </li>
          <li class="nav-item" data-bs-target="#sidenav-collapse-main" data-bd- 
      toggle="collapse">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
        
        </ul>
        </div>
        <div style={{color:'green'}}>searching for : {search}</div>
        <form onSubmit={handleSearchSubmit} className="d-flex mt-3" role="search" >
          <input className="form-control me-2" name="search" onChange={handleSearch} value={search} type="search" placeholder="Search for Product" aria-label="Search"/>
          <button className="btn btn-outline-success"  data-bs-dismiss= "offcanvas" type="submit">Search</button>
        </form>
      </div>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav