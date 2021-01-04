import { useEffect } from 'react'
import Router from 'next/router'
import Layout from '../components/Layout'
import Category from './category/[slug]'

const Home = () => {
  useEffect(() => {
    const { pathname } = Router
    if (pathname == '/') {
      Router.push('/category/new-in')
    }
  })

  return <Layout>{/* <Category /> */}</Layout>
}

export default Home
