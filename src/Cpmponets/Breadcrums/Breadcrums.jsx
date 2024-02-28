import React from 'react'
import './Breadcrums.css'
import arro_icon from '../assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
  const { product } = props;

  return (
    <div className='breadcrums'>
      Home <img src={arro_icon} alt="" /> Shop <img src={arro_icon} alt="" />
      {product ? (
        <>
          {product.category} <img src={arro_icon} alt="" /> {product.name}
        </>
      ) : 'Loading...'}
    </div>
  )
}

export default Breadcrums
