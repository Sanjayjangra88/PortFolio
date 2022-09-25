import React, { useState } from "react"
import "./header.css"
import logo from "../Pic/logo.png"

const Header = () => {
return (
    <>
      {/* <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>

          <div className='navlink'>
            <ul className="nav-links-mobile">
              <li>
                <a href='#home'>home</a>
              </li>
              <li>
                <a href='#features'>features</a>
              </li>
              <li>
                <a href='#portfolio'>portfolio</a>
              </li>
              <li>
                <a href='#resume'>resume</a>
              </li>
              <li>
                <a href='#clients'>clients</a>
              </li>
              <li>
                <a href='#blog'>blog</a>
              </li>
              <li>
                <a href='#contact'>contact</a>
              </li>
              <li>
                <button className='home-btn'>BUY NOW</button>
              </li>
            </ul>

            
          </div>
        </div>
      </header> */}
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