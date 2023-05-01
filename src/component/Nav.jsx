import React, {useState} from 'react';
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

import IconButton from '@mui/material/IconButton';
import Search from '@mui/icons-material/Search';
import { primaryURL, age } from './Config';


function Nav () {
  const history= useHistory()
  let {name}= useParams()
  const [search, setSearch]=useState("");
  const handleSearch=(e)=>{
    
    setSearch(e.target.value)
    console.log(search);

  }

  const handleSearchSubmit=(e)=>{
    e.preventDefault();
    console.log(search);

    axios.post(`${primaryURL}/searchproduct`, {search})
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
  return (
   <div> 
   <nav className="navbar bg-body-tertiary  home-route">
  <div class="container-fluid">
    <Link className="navbar-brand logo" to="/"><img className='' src={logo} alt="logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title " id="offcanvasNavbarLabel"><img style={{width:'2.5rem'}} src={logo} alt='logo'/>  NA'TREL THERAPY SHOP</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart"> <AddShoppingCartIcon /> View Cart </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
        
        </ul>
        <div style={{color:'red'}}>searching for : {search}</div>
        <form onSubmit={handleSearchSubmit} className="d-flex mt-3" role="search" >
          <input className="form-control me-2" name="search" onChange={handleSearch} value={search} type="search" placeholder="Search for Product" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav