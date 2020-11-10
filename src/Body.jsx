import React from 'react'
import './index.css'

export default function Body () {
  const whiteVNeck = '/classic-tee.jpg'

  return (
    <div className= 'body-container'>
      <img 
      className = 'classic-tee'
      src= {whiteVNeck}
      alt='person wearing white V-neck T-shirt'/>


    </div>
  )
}