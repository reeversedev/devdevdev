import Head from 'next/head'
import Link from 'next/link'

import { useContext, useState, useEffect } from 'react'
import { openCart, closeCart } from '../utils/actions'
import { CartContext } from '../pages/_app'
import Authentication from './Modal/Authentication'
import {
  useLogoutMutation,
  ProfileQuery,
  User,
} from '../graphql/generated/graphql'
import { setAccessToken } from '../lib/accessToken'

const links = [
  { name: 'Home', url: '/category/new-in' },
  { name: 'My Orders', url: '/account/my-orders' },
  { name: 'Settings', url: '/account/profile' },
]

const Header: React.FC<User> = (profile) => {
  const [loginForm, setLoginForm] = useState(false)
  const { firstName, lastName } = profile
  const {
    cart: { displayCart },
    setCart,
  } = useContext(CartContext)

  const [logoutOperation, { client, data: logoutData }] = useLogoutMutation()

  const logoutFunction = async () => {
    try {
      await client.resetStore()
      await logoutOperation()
      setAccessToken('')
    } catch (err) {}
  }

  useEffect(() => {
    console.log('something changed in store', client.store)
  }, [client.store])

  return (
    <div className="d-flex justify-content-between align-items-center header">
      <Head>
        <title>dev dev dev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="logo">
        <Link href="/category/new-in">
          <a>
            <img src="/logo.svg" />
          </a>
        </Link>
      </div>

      <label className="search-bar">
        <input
          type="text"
          placeholder="Search for awesome essentials..."
          className="no-border"
        />
      </label>

      {/* Active when login is implemented */}
      {firstName && (
        <div
          className="d-flex justify-content-between align-items-center cursor-pointer"
          onClick={() => setCart(!displayCart ? closeCart() : openCart())}
        >
          <img
            src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
            height="16"
          />
          <span>Cart: </span>
          <span>2</span>
        </div>
      )}
      {!firstName && (
        <div className="d-flex">
          <a
            className="cursor-pointer d-flex justify-content-between font-weight-700"
            onClick={() => setLoginForm(!loginForm)}
          >
            <img src="/user.svg" height="20" alt="user" className="mr-2" />{' '}
            Login
          </a>
          {loginForm && (
            <Authentication onModalClose={() => setLoginForm(false)} />
          )}
        </div>
      )}

      {/* Active when login is implemented */}
      {firstName && (
        <div className="d-flex">
          <div className="hello-name">
            <span>
              <b>
                {firstName} {lastName}
              </b>
            </span>
            <div className="profile-menu">
              <ul>
                {links.map(({ name, url }, i) => (
                  <li key={i}>
                    <Link href={url}>
                      <a>{name}</a>
                    </Link>
                  </li>
                ))}
                <li>
                  <a onClick={logoutFunction}>Sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
