import React from 'react'
import logo from '../../assets/logo.png'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar' id='home'>
        
        <div className='logo'>
            <img src={logo}></img>
        </div>

        <div className='options'>
            <ul className='nav-items'>
                <a href="#home" className='nav-item'>Home</a>
                <a href="#about" className='nav-item'>About</a>
                <a href="#overview" className='nav-item'>Overview</a>
                <a href="#contact" className='nav-item'>Contact</a>
            </ul>
        </div>
        
    </div>
    
  )
}
