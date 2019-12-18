import { Toolbox } from '../components'
import { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      windowHeight: null,
    }
  }

  componentDidMount() {
    this.getWindowSize()
    window.addEventListener('resize', this.getWindowSize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getWindowSize)
  }

  getWindowSize = () => {
    this.setState({ windowHeight: window.innerHeight })
  }

  render() {
    const { windowHeight } = this.state

    return (
      <main className="home">
        <section className="hero" style={{ height: windowHeight - 80 }}>
          {windowHeight && (
            <img
              className="hero-bg desktop"
              src="/images/home-hero-desktop.svg"
            />
          )}
          {windowHeight && (
            <img
              className="hero-bg mobile"
              src="/images/home-hero-mobile.svg"
            />
          )}
          <div className="hero-copy">
            <h1>I'm Delilah</h1>
            <p>a front-end web developer</p>
          </div>
        </section>
        <Toolbox />
      </main>
    )
  }
}
