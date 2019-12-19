import React from 'react'
import { PageCurl, BusTracker } from '../components'

const Work = () => (
  <main className="work">
    {/* <section className="container hero">
      <h1>Under Construction</h1>
    </section> */}
    <section>
      <h2>My Toolbox</h2>
    </section>
    <section className="professional">
      <h2>Professional Work</h2>
      <div className="row">
        <PageCurl image={'/images/northface.jpg'} z={"4"}/>
        <PageCurl image={'/images/northface.jpg'} z={"3"}/>
        <PageCurl image={'/images/northface.jpg'} z={"2"}/>
      </div>
    </section>
    <section className="transit">
        <h2>For Fun</h2>
        {/* <BusTracker /> */}
      </section>
  </main>
)

export default Work
