import React from 'react'
 
import logo from '../maxresdefault.jpg'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import {faBars} from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary " >

  
  <div className="container-fluid">
    <img src={logo} className="logo" alt="logo" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
< FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
    </button>

    

    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item container-nav-items">
          <a className="nav-link home-link active light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-link" href="#">About Me</a>
        </li>
       

        <li className="nav-item">
          <a className="nav-link link-link" href="#">Port Folio</a>
        </li>

        <li className="nav-item">
          <a className="nav-link link-link" href="#">Services</a>
        </li>

        <li className="nav-item">
          <a className="nav-link link-link" href="#">Contact</a>
        </li>

          </ul>
      
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Navbar





