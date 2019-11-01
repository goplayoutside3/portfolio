import React from 'react'
import App from 'next/app'
import Layout from '../components/Layout'
import '../styles/styles.scss'

export default class MyApp extends App {
  render () {
    const { Component, pageProps, router } = this.props
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}