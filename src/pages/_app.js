import React from 'react'
import App from 'next/app'
import Layout from '../components/Layout'
import '../styles/styles.scss'

export default class MyApp extends App {
  constructor(props) {
    super(props)
    this.state = { isMobile: false }
  }

  componentDidMount() {
    this.checkWidth()
    window.addEventListener('resize', this.checkWidth)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkWidth)
  }

  checkWidth = () => {
    if (window.innerWidth < 576) this.setState({ isMobile: 'small' })
    else if (window.innerWidth < 768) this.setState({ isMobile: 'medium' })
    else this.setState({ isMobile: false })
  }

  render() {
    const { Component, pageProps, router } = this.props
    return (
      <Layout>
        <Component {...pageProps} key={router.route} isMobile={this.state.isMobile} />
      </Layout>
    )
  }
}
