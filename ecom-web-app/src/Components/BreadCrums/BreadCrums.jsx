import React from 'react'
import './bread.scss'
import arrow_icon from '../assets/breadcrum_arrow.png'

const BreadCrums = (props) => {
    const {product} = props
  return (
    <>
      <div className="breadCrum">
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
        
      </div>
    </>
  )
}

export default BreadCrums
