import React from 'react'
import './Footer.css'
import footer from '../assets/logo_big.png'
import insta from '../assets/instagram_icon.png'
import print from '../assets/pintester_icon.png'
import wa from '../assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footer-logo">
            <img src={footer} alt="" />
            <p>Walmart</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contct</li>
        </ul>
        <div className="footer-social-ions">
            <div className="footer-icon-container">
                <img src={insta} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={print} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={wa} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>CopyRights @ 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer