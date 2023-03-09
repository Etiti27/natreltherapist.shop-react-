import React from 'react';
import { Link, useHistory} from "react-router-dom";
import userIcon from "../images/user-icon.png";
import logo from "../images/logo.png"
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
   <nav className="navbar navbar-expand-md " aria-label="Fourth navbar example">
      <div className="container-fluid ">
        <Link className='navbar-brand' to="/"><img src={NatrelLogo} alt="natreltherapy logo"/></Link>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="navbar-collapse collapse" id="navbarsExample04" >
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">About Us</Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/">Review</a>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" href="/">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> */}
          </ul>
          {/* <form role="search">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search"/><span> <button className="btn btn-light"><IconButton color="primary" >
                                  <Search />
                              </IconButton></button></span>
          </form> */}
        </div>
      </div>
      
    </nav>
    </div>
  )
}

export default Nav