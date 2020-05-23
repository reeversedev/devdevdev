import Layout from '../components/layout'
import Category from './category/[slug]'
import { CartContext } from '../utils/CartContext'
import { useState, useReducer } from 'react'

const initialState = {}

const Home = () => {
  const [cart, setCart] = useState(false)
  // const [state, dispatch] = useReducer((() => ), initialState)
  return (
    <CartContext.Provider value={{}}>
      <Layout>
        <Category />
      </Layout>
    </CartContext.Provider>
  )
}

export default Home
