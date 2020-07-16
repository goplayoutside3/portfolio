import React from 'react'
import { PageCurl, BusTracker, Toolbox } from '../components'

const Work = ({ isMobile }) => (
  <main className="work">
    <section className="professional">
      <h2>Professional Work</h2>
      <p className="desc mobile">
        Select projects built as lead developer at{' '}
        <a href="https://www.reachcreative.com/" target="_blank">
          Reach Creative
        </a>
        , a Chicago-based design agency.
      </p>
      <div className="row">
        <PageCurl
          image="/images/northface2.jpg"
          z="4"
          title="Rewind Nature"
          site="https://www.nationalgeographic.com/rewindnature/"
          isMobile={isMobile}
        />
        <PageCurl
          image="/images/mazda2.jpg"
          z="3"
          title="Inspiration in Every Mile"
          site="https://www.nationalgeographic.com/mazda/"
          isMobile={isMobile}
        />
        <PageCurl
          image="/images/maine2.jpg"
          z="2"
          title="What's In Your Pack?"
          site="https://www.nationalgeographic.com/whatsinyourpack/"
          isMobile={isMobile}
        />
      </div>
      <p className="desc desktop">
        Select projects built as lead developer at{' '}
        <a href="https://www.reachcreative.com/" target="_blank">
          Reach Creative
        </a>
        , a Chicago-based design agency.
      </p>
    </section>
    <section className="toolbox">
      <h2>My Toolbox</h2>
      <Toolbox />
    </section>
    <section className="transit">
      <h2>For Fun</h2>
      <BusTracker />
    </section>
  </main>
)

export default Work
