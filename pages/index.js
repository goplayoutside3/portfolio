import Link from 'next/link'

const Homepage = () => {
  return (
    <main className="home">
      <section className="hero">
        <img className="hero-bg desktop" src="/images/home-hero-desktop.svg" />
        <img className="hero-bg mobile" src="/images/home-hero-mobile.svg" />
        <div className="hero-copy">
          <h1>I'm Delilah</h1>
          <p>a front-end web developer</p>
        </div>
      </section>
      <section className="introduction">
        <p>
          I work at <a href="https://www.reachcreative.com/" target="_blank">Reach Creative</a>, a Chicago-based design agency.
        </p>
      </section>
    </main>
  )
}

export default Homepage
