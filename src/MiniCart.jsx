import React, {useState, useContext} from 'react'
import { CartContext } from './CartContext'
import './styles/minicart.css'

export default function MiniCart () {
  const [showMini, setShowMini] = useState('visible')
  const [hoverMini, setHoverMini] = useState(false)
  const [cartCount, setCartCount] = useContext(CartContext)

  const click = () => {
    showMini === 'hidden' ? setShowMini('visible') : setShowMini('hidden')
  } 
  

  return (
<>
  <p className= 'nav-text' 
  onMouseEnter={() => setHoverMini(true)}
  onMouseLeave={() => setHoverMini(false)}
  onClick={() => click()}>My Cart ( {cartCount.qty} )</p>
  {hoverMini && (
   <div className='minicart-container' style={{visibility: showMini}}>
     <div className='card'>
       <img className='mini-img' src= '/classic-tee.jpg' alt='person wearing white V-neck T-shirt'/> 
       <div className='details'>
        <p>Classic Tee</p>
        <p>1 x <span className='mini-price'>$75.00</span></p>
        <p>Size: S</p>
      </div>
    </div>
    <div className='card'>
       <img className='mini-img' src= '/classic-tee.jpg' alt='person wearing white V-neck T-shirt'/>
       <div className='details'>
        <p>Classic Tee</p>
        <p>3 x <span className='mini-price'>$75.00</span></p>
        <p>Size: L</p>
      </div>
    </div>
  </div>
  )}
  
</>
  )
} 