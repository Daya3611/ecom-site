import React from 'react'
import './hero.css'
import hand_icon from '../assets/hand_icon.png'
import arro from '../assets/arrow.png'
import hero_img from '../assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals Only</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
            </div>
            <div className="hero-latest-button">
                <div>
                    Letest Collection
                    <img src={arro} alt="" />
                </div>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_img} alt="" />
        </div>
    </div>
  )
}

export default Hero