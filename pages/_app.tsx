import { AppProps } from 'next/app'

import React, { useReducer } from 'react'
import Layout from '../components/Layout'

type CartContextType = {
  cart: {
    displayCart: Boolean
    view: String
  }
  setCart: any
}

export const CartContext = React.createContext<CartContextType>({
  cart: {
    displayCart: false,
    view: 'half',
  },
  setCart: () => {},
})

const initialState = { displayCart: false, view: 'half' }

function reducer(state, action) {
  switch (action.type) {
    case 'OPEN_CART':
      return { ...initialState, displayCart: true, view: 'half' }
    case 'CLOSE_CART':
      return { ...initialState, displayCart: false, view: 'half' }
    case 'FULL_VIEW':
      return { ...initialState, displayCart: true, view: 'full' }
    default:
      return initialState
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useReducer(reducer, initialState)
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContext.Provider>
  )
}

export default MyApp
