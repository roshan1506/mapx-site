import React from 'react'
import logo from '../../assets/logo.png'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        
        <div className='logo'>
            <img src={logo}></img>
        </div>

        <div className='options'>
            <ul className='nav-items'>
                <a className='nav-item'>Home</a>
                <li className='nav-item'>Contact</li>
                <li className='nav-item'>Overview</li>
                <li className='nav-item'>About</li>
            </ul>
        </div>
        
    </div>
    
  )
}
