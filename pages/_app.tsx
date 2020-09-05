import { useReducer, createContext } from 'react'
import { ApolloProvider } from '@apollo/react-hooks'

import Layout from '../components/Layout'
import { withApollo } from '../lib/withApollo'

type UserContextType = {
  cart: {
    displayCart: Boolean
    view: String
  }
  setCart: any
}

export const UserContext = createContext<UserContextType>({
  cart: {
    displayCart: true,
    view: 'zero',
  },
  setCart: () => {},
})

const initialState = { displayCart: true, view: 'zero' }

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_CART':
      return { ...state, displayCart: true, view: 'half' }
    case 'CLOSE_CART':
      return { ...state, displayCart: true, view: 'zero' }
    case 'FULL_VIEW':
      return { ...state, displayCart: true, view: 'full' }
    default:
      return state
  }
}

function MyApp({ Component, pageProps, apolloClient }) {
  const [cart, setCart] = useReducer(reducer, initialState)
  return (
    <ApolloProvider client={apolloClient}>
      <UserContext.Provider value={{ cart, setCart }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContext.Provider>
    </ApolloProvider>
  )
}

export default withApollo(MyApp)
