import React from 'react'
import './index.css'

export default function Sizes () {


  return (
    <div className='size-container'>
      <p className='size-title'>SIZE<span className='size-required'>*</span></p>
      <div className='size-boxes'>
        <p className='small'>S</p>
        <p className='medium'>M</p>
        <p className='large'>L</p>
      </div>
      <button className='size-button'>ADD TO CART</button>
    </div>
  )
}