import React from 'react'
import './footer.css';

export default function Footer() {
  return (
    <div className='main'>

        <div className="sidebox">
            <h1>Vogue</h1><pre></pre>
            <span>
            Welcome to Vogue, your favorite fashion destination.Inspiring Sri Lankan women by creating and crafting fashionable clothing.
            </span>
        </div> 

        <div className="footercontent">
        <ul>
        <li><heading>SERVICE</heading></li>
        <li><a href='#'>Shipping & Returning</a></li>
        <li><a href='#'>Privacy Policy</a></li>
        <li><a href='#'>Terms & Conditions</a></li>
        </ul>
        </div>

        <div className="footercontent">
        <ul>
        <li><heading>INFORMATION</heading></li>
        <li><a href='#'>About Us</a></li>
        <li><a href='#'>Contact</a></li>
        <li><a href='#'>FAQs</a></li>
        </ul>
        </div>
        <div className="footercontent">
        <ul>
        <li><heading>GET IN TOUCH</heading></li>
        <li><a href='#'>Online@vogue.com</a></li>
        <li><a href='#'>+9477895618</a></li>
        <li><a href='#'>+9477895618</a></li>
        </ul>
        </div>
    </div>
  )
}
