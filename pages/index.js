import React from 'react'
import Layout from '../components/Layout'

import '../styles/styles.scss'

const Homepage = () => (
  <Layout description={'Homepage'}>
    <main className="home">
      <section className="container hero">
        <h1>
          <span className="name">I'm Delilah</span>
          <span>a front-end web developer</span>
        </h1>
      </section>
    </main>
  </Layout>
)

export default Homepage
