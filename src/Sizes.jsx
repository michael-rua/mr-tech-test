import React, {useState, useContext} from 'react'
import './styles/sizes.css'
import { CartContext } from './CartContext'


export default function Sizes () {
  const [cartCount, setCartCount] = useContext(CartContext)

  const [toggleClass, setToggleClass] = useState({
    class:'small',
    qty:0,
    size: 'S'
  })
  const [toggleClass2, setToggleClass2] = useState({
    class:'medium',
    qty:0,
    size: 'M'
  })
  const [toggleClass3, setToggleClass3] = useState({
    class:'large',
    qty:0,
    size: 'L'
  })
  

  const clickHandler = () => {
    toggleClass.class === 'small' ? setToggleClass({
      class:'small-clicked',
      qty:1,
      size: 'S'
    }) : setToggleClass({
    class:'small',
    qty:0,
    size: 'S'
  })
  }

  const clickHandler2 = () => {
    toggleClass2.class === 'medium' ? setToggleClass2({
      class:'medium-clicked',
      qty:1,
      size: 'M'
    }) : setToggleClass2({
      class:'medium',
      qty:0,
      size: 'M'
    })
  }
  const clickHandler3 = () => {
    toggleClass3.class === 'large' ? setToggleClass3({
      class:'large-clicked',
      qty:1,
      size: 'L'
    }) : setToggleClass3({
      class:'large',
      qty:0,
      size: 'L'
    })
  }

  // const addToCart = () => {

  // toggleClass.qty > 0 ? setCartCount({
  //   qty: toggleClass.qty,
  //   size: 'S',
  // }) : null
  // toggleClass2.qty > 0 ? setCartCount({
  //   qty: toggleClass2.qty,
  //   size: 'M',
  // }) : null
  // toggleClass3.qty > 0 ? setCartCount({
  //   qty: toggleClass3.qty,
  //   size: 'L',
  // }) : null
  // }

  return (
    <div className='size-container'>
      <p className='size-title'>SIZE<span className='size-required'>*</span></p>
      <div className='size-boxes'>
        <p className={toggleClass.class} onClick={() => clickHandler()}>S</p>
        <p className={toggleClass2.class} onClick={() => clickHandler2()}>M</p>
        <p className={toggleClass3.class} onClick={() => clickHandler3()}>L</p>
      </div>
      <button className='size-button'>ADD TO CART</button>
    </div>
  )
}