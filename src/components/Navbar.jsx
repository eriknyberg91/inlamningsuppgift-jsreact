import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="container">

            <a id="logo" href="index.html"><img src='\src\img\logo.svg' alt="Silicon logo" /></a>

            <nav id="main-menu" className="navbar-features">
                <a className="nav-link" href="#">Features</a>
                <a className="nav-link" href="#">Contact</a>
            </nav>

            <div className="btn-toggle-switch">
                <span className="label"> Dark Mode</span>
                <label className="switch">
                    <input type="checkbox" id="colormode-toggle" />
                    <span className="slider"></span>
                </label>
            </div>

            <a id="auth-signin" className="btn-primary" href="#">
                <i className="fa-regular fa-user"></i>
                <span>Sign in / up</span>
            </a>

            <button className="btn-mobile">
                <i className="fa-solid fa-bars"></i>
            </button>

        </div>
  )
}

export default Navbar