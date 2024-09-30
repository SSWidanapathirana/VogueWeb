import React from 'react'
import './header.css';
import logo from '../assets/logo.png';


export default function Header() {
  return (
    <div className="headerbg">
            <nav>
              <div className="logo">
                <h1>Vogue</h1>
              </div>
              <ul className='nav-link'>
                <li><a href="#">SHOP NOW</a></li>
                <li><a href="#">GIFT CARDS</a></li>
                <li><a href="#">CONTACT</a></li>
                <button className='signup'>SIGN UP</button>
              </ul>
            </nav>
        
    </div>
  )
}
