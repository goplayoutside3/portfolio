import { Toolbox } from '../components'

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
      {/* <Toolbox /> */}
    </main>
  )
}

export default Homepage
