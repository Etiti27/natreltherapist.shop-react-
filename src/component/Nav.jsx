import React from 'react';
import { Link, useHistory} from "react-router-dom";
import userIcon from "../images/user-icon.png";
import logo from "../images/logo1.jpeg"
import toggle from "../images/toggle-icon.png";
import bagIcon  from "../images/bag-icon.png";
// import search from "../images/search-icon.png"
import NatrelLogo from "../images/Whitengreen.png"
import "../css/style.css"

import IconButton from '@mui/material/IconButton';
import Search from '@mui/icons-material/Search';


function Nav () {
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
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/Contact Us">Contact Us</Link>
          </li>
        
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav