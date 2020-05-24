import App from 'next/app'
import Head from 'next/head'
import Home from './index'
import Header from '../components/header'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Home>
        <Component {...pageProps} />
      </Home>
    )
  }
}

export default MyApp
