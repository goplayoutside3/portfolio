import React from 'react'
import { PageCurl, BusTracker } from '../components'

const Work = () => (
  <main className="work">
    <section className="container hero">
      <h1>Under Construction</h1>
    </section>
    <section className="professional">
      <h2>Professional Work</h2>
      <div className="row">
        <PageCurl image={'/images/northface.jpg'} />
        <PageCurl image={'/images/northface.jpg'} />
        <PageCurl image={'/images/northface.jpg'} />
      </div>
    </section>
    {/* <section className="transit">
        <h2>For Fun</h2>
        <BusTracker />
      </section> */}
  </main>
)

export default Work
