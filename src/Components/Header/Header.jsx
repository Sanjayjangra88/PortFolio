import React, { useState } from "react"
import "./header.css"
import logo from "../Pic/logo.png"

const Header = () => {
return (
    <>
        <nav className='navbar'>
        <div className='navbar-container container'>
            <input type="checkbox"name=""id=""/>
            <div className="hamburger-lines">
                <span className='line line1'></span>
                <span className='line line2'></span>
                <span className='line line3'></span>
            </div>
            <ul className='menu-items'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Menu</a></li>
                <li><a href='#'>Testomonial</a></li>
                <li><a href='#'>Contact</a></li>
                <li><button className='home-btn'>BUY NOW</button></li>
                
            </ul>
            <h1 className='logo'><img src={logo} alt='my' /></h1>

        </div>
        </nav> 
      <section className="demo"></section>
    </>
  )
}

export default Header