import React from 'react'
import "./Navbar.css"
import rubixeLogo from './rubixe_logo.png'
export default function Navbar() {
  return (
    <div className='nav-container' style={{ height: "80px" }}>
      <img src={rubixeLogo} alt="" height={50} style={{ position: "relative", right: "100px" }} />
      <ul className='nav-list' style={{ position: "relative", left: "40px" }}>
        <li>HOME</li>
        <li>SERVICES</li>
        <li>PRODUCTS</li>
        <li>AI INTERNSHIPS</li>
        <li>CAREER</li>
        <li>BLOG</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
      </ul>
    </div>
  )
}
