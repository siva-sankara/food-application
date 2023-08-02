import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className='banner'>
      <p className='banner-p'>We're open and available for take away & delivery.<Link to="/order">Order Now.</Link></p>
    </div>
  )
}

export default Banner
