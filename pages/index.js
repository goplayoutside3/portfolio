import { useState, useEffect } from 'react'

const useWindowSize = () => {
  const isClient = typeof window === 'object'

  const getSize = () => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) return false
    const handleResize = () => setWindowSize(getSize())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

const Homepage = () => {
  const size = useWindowSize()

  return (
    <main className="home">
      <section
        className="hero"
        style={{ height: `calc(${size.height}px - 80px)` }}
      >
        <img className="hero-bg desktop" src="/images/home-hero-desktop.svg" />
        <img className="hero-bg mobile" src="/images/home-hero-mobile.svg" />
        <div className="hero-copy">
          <h1>I'm Delilah</h1>
          <p>a front-end web developer</p>
        </div>
      </section>
    </main>
  )
}

export default Homepage
