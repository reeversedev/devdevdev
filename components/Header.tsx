import Head from 'next/head'
import Link from 'next/link'

import { useContext, useState } from 'react'
import { openCart, closeCart } from '../utils/actions'
import { CartContext } from '../pages/_app'
import Authentication from './Modal/Authentication'
import { useLogoutMutation } from '../graphql/generated/graphql'
import { setAccessToken } from '../lib/accessToken'
import Router from 'next/router'

const links = [
  { name: 'Home', url: '/category/new-in' },
  { name: 'My Orders', url: '/' },
  { name: 'Settings', url: '/' },
]

const Header = ({ firstName }) => {
  const [loginForm, setLoginForm] = useState(false)
  const {
    cart: { displayCart },
    setCart,
  } = useContext(CartContext)

  const [logout, { data, client }] = useLogoutMutation()

  return (
    <div className="d-flex flex-sm-column justify-content-between align-items-center header">
      <Head>
        <title>dev dev dev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="logo d-sm-none">
        <Link href="/category/new-in">
          <img src="/logo.svg" />
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
        <div className="d-flex w-sm-100">
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
        <div className="d-flex w-sm-100">
          <div className="hello-name">
            <img
              src="https://pbs.twimg.com/profile_images/1239922488160575489/_Ykuf9DR_400x400.jpg"
              alt="Profile Picture"
              height="30"
            />
            <span>
              Hey! <b>{firstName}</b>
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
                  <a
                    onClick={async () => {
                      try {
                        await logout()
                        setAccessToken('')
                        Router.reload()
                        await client.resetStore()
                      } catch (err) {
                        console.log('dasdadasdasdasd', err)
                      }
                    }}
                  >
                    Sign out
                  </a>
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
