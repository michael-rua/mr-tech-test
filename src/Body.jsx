import React from 'react'
import './index.css'
import Sizes from './Sizes'

export default function Body () {
  const whiteVNeck = '/classic-tee.jpg'

  return (
    <div className= 'body-container'>
      <img 
      className = 'classic-tee'
      src= {whiteVNeck}
      alt='person wearing white V-neck T-shirt'/>
      <div className='description-container'>
      <h3 className='title'>Classic Tee</h3>
      <div className='lines'>
        <h5 className='price'>$75.00</h5>
      </div>
      <p className='description'>
      Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
      </p>
      <Sizes />
      </div>
    </div>

  )
}