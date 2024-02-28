import React from 'react'
import './offers.css'
import exclusive_img from '../assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exlusive</h1>
            <h1>Offerce for You</h1>
            <p>Only On Best Sellers Products</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_img} alt="" />
        </div>
    </div>
  )
}

export default Offers