import React, {useState} from 'react'
import './index.css'

export default function MiniCart () {
  const [showMini, setShowMini] = useState('hidden')
  const [hoverMini, setHoverMini] = useState(false)

  const click = () => {
    showMini === 'hidden' ? setShowMini('visible') : setShowMini('hidden')
  } 
  

  return (
<>
  <p className= 'nav-text' 
  onMouseEnter={() => setHoverMini(true)}
  onMouseLeave={() => setHoverMini(false)}
  onClick={() => click()}>My Cart ( 4 )</p>
  {hoverMini && (
   <div className='minicart-container' style={{visibility: showMini}}>
     <div classname='card'>
       <div className='img-div'>
        <img className='mini-img' src= '/classic-tee.jpg' alt='person wearing white V-neck T-shirt'/>
       </div>
       <div className='details'>
        <p>Classic Tee</p>
        <p>1x $75.00</p>
        <p>Size: S</p>
      </div>
    </div>
    <div classname='card'>
      <div className='img-div'>
        <img className='mini-img' src= '/classic-tee.jpg' alt='person wearing white V-neck T-shirt'/>
       </div>
       <div className='details'>
        <p>Classic Tee</p>
        <p>3x $75.00</p>
        <p>Size: L</p>
      </div>
    </div>
  </div>
  )}
  
</>
  )
} 