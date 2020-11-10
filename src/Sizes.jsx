import React, {useState} from 'react'
import './index.css'

export default function Sizes () {
  const [toggleClass, setToggleClass] = useState('small')
  const [toggleClass2, setToggleClass2] = useState('medium')
  const [toggleClass3, setToggleClass3] = useState('large')

  const clickHandler = () => {
    toggleClass === 'small' ? setToggleClass('small-clicked') : setToggleClass('small')
  }

  const clickHandler2 = () => {
    toggleClass2 === 'medium' ? setToggleClass2('medium-clicked') : setToggleClass2('medium')
  }
  const clickHandler3 = () => {
    toggleClass3 === 'large' ? setToggleClass3('large-clicked') : setToggleClass3('large')
  }
  return (
    <div className='size-container'>
      <p className='size-title'>SIZE<span className='size-required'>*</span></p>
      <div className='size-boxes'>
        <p className={toggleClass} onClick={() => clickHandler()}>S</p>
        <p className={toggleClass2} onClick={() => clickHandler2()}>M</p>
        <p className={toggleClass3} onClick={() => clickHandler3()}>L</p>
      </div>
      <button className='size-button'>ADD TO CART</button>
    </div>
  )
}