import React, { useState, createContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState({
    qty: 4,
    size: null,
  })

  return (
    <CartContext.Provider value={[cartCount, setCartCount]}>
      {children}
    </CartContext.Provider>
  )
}