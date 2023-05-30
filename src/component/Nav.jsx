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
import { primaryURL, age } from '../../Config';


function Nav () {
  const history= useHistory()
  let {name}= useParams()
  const [search, setSearch]=useState("");
  const [istrue, setIsTrue]=useState(false)
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
    const url=`${primaryURL}/searchproduct`;
    const url2='http://localhost:3000/searchproduct'

    axios.post(url, {search})
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
   {/* beginn */}
   {/* <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-trigger="#main_nav">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="navbar-collapse" id="main_nav">
    <div class="offcanvas-header mt-3">  
      <button class="btn btn-outline-danger btn-close float-right"> &times Close </button>
      <h5 class="py-2 text-white">Main navbar</h5>
    </div>
    <ul class="navbar-nav">
      <li onClick={clicked} class="nav-item active"> <a class="nav-link" href="#">Home </a> </li>
      <li class="nav-item"><a class="nav-link" href="#"> About </a></li>
      <li class="nav-item"><a class="nav-link" href="#"> Services </a></li>
    </ul>
  </div> 
</nav>
   {/* endd */}
   {/* begin */}
   {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Disabled</a>
                </li>
            </ul>
            <form class="d-flex my-2 my-lg-0">
                <input class="form-control me-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav> */} 
   {/* end */}
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
            <Link className="nav-link" to="/cart"> <AddShoppingCartIcon /> View Cart </Link>
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