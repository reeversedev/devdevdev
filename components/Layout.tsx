import Header from './Header'
import Toolbar from './Toolbar'
import Cart from './Cart'

import '../sass/pages/_app.scss'

import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../pages/_app'
import { withApollo } from '../lib/withApollo'
import { useProfileQuery } from '../graphql/generated/graphql'

const buttons = [
  {
    name: 'Home',
    img: '/home.svg',
    type: 'link',
    link: '/',
    className: 'home',
  },
  { name: 'Sort', img: '/home.svg', type: 'block', className: 'sort' },
]

const Layout = (props) => {
  const { data, error } = useProfileQuery()
  const [profile, setProfile] = useState(null)
  const {
    cart: { displayCart, view },
  } = useContext(UserContext)

  if (error) {
    localStorage.setItem('status', error.message)
  }

  useEffect(() => {
    if (data !== undefined) {
      setProfile(data.profile)
    }
  }, [data])

  return (
    <div className="container">
      <Header {...profile} />
      {props.children}
      {displayCart && (
        <div className={`${view}-open cart-container`}>
          <Cart />
        </div>
      )}
      <div className="d-flex flex-sm-column align-items-center align-items-sm-start justify-content-between sticky-toolbar d-lg-none">
        <Toolbar buttons={buttons} />
      </div>
    </div>
  )
}

export default withApollo(Layout)
