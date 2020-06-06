import { AppProps } from 'next/app'

import { useReducer, useEffect, createContext } from 'react'
import Router, { useRouter } from 'next/router'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import Layout from '../components/Layout'
import SplashScreen from '../components/SplashScreen'

type CartContextType = {
  cart: {
    displayCart: Boolean
    view: String
  }
  setCart: any
}

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
})

export const CartContext = createContext<CartContextType>({
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
  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    const { pathname } = Router
    if (pathname == '/') {
      Router.push('/category/new-in')
    }
  })
  if (!slug) {
    return (
      <SplashScreen>
        <img src="/logo.svg" />
      </SplashScreen>
    )
  }
  return (
    <ApolloProvider client={client}>
      <CartContext.Provider value={{ cart, setCart }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContext.Provider>
    </ApolloProvider>
  )
}

export default MyApp
