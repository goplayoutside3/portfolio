import React from 'react'
import App from 'next/app'
import Layout from '../components/Layout'
import { PageTransition } from 'next-page-transitions'

import '../styles/styles.scss'

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props
    return (
      <Layout>
        <PageTransition timeout={300} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>
      </Layout>
    )
  }
}
