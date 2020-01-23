import React, { Component } from 'react'
import '../gsap/gsap.min.js'
import DrawSVGPlugin from '../gsap/DrawSVGPlugin.min.js'

class Community extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.drawSkyline()

    if (!this.props.isMobile || this.props.isMobile === 'medium') {
      this.drawCurves()
      window.addEventListener('scroll', this.handleScroll)
    }
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
  }

  drawSkyline = () => {
    const tl = new TimelineLite()
    tl.from('.skyline', 5, { drawSVG: '60%', ease: 'power4.out' })
  }

  drawCurves = () => {
    const drawTween = TweenMax.fromTo(
      '#curves',
      10,
      { drawSVG: '100% 100%' },
      { drawSVG: '0% 100%' }
    )
    drawTween.pause()
    this.drawTween = drawTween
  }

  handleScroll = () => {
    const windowHeight = window.innerHeight
    const bottomPosition = document
      .getElementById('rooted')
      .getBoundingClientRect().bottom
    const scrollableHeight = document
      .getElementById('rooted')
      .getBoundingClientRect().height
    const newProgress =
      (bottomPosition - windowHeight) / (scrollableHeight - windowHeight)

    let updateProgress = 1 - newProgress
    this.drawTween.progress(updateProgress)
  }

  render() {
    return (
      <main className="community">
        <section className="rooted" id="rooted">
          <svg
            className="scrolling-anim"
            x="0px"
            y="0px"
            viewBox="0 0 1333.9 2683.1"
            preserveAspectRatio="none"
          >
            <path
              id="curves"
              className="svg-line scrolling-path"
              d="M1185.9,2682.1h-1052l0.5-567.5l0,0H1185h0.4l1-568h-1l-1051.1,0.2l0.6-567.2l0,0h1050l1.4,0
	          l0.6-446"
            />
            <path
              id="skyline"
              className="svg-line skyline"
              d="M133.9,533.6c-119.9,0-20.4-0.4-132.9-0.4c0-4.9,0-79.1,0-83.1c11.7-0.7,24.1-1.4,37.1-2.2
              c0-14.1,0-26.4,0-39.5c14.1-0.6,27.5-1.2,42.3-1.9c0-38.5,0-75.2,0-113.3c6.4,0,11.4,0,17.1,0c0-28.7,0-55.9,0-83
              c4.4-4.4,8.4-8.4,11.2-11.2c12.9-2.6,22.7-0.7,28.9,12.3c0,25.9,0,53.2,0,81.9c5.7,0,10.7,0,17.1,0c0,25.2,0,49,0,73.1
              c3.9,0.8,6.5,1.3,9,1.8c1.1,6.3,2,11.8,2.7,16.5c5.1,0,10.1,0,14.7,0c1.7-7.3,3.2-13.9,4.8-20.8c6.9,0,12.3,0,19.2,0
              c0-41.3,0-81.9,0-122.8c3.9-0.8,6.5-1.3,10.4-2c0-30.8,0-61,0-91.9c4,0,6.4,0,10.4,0c0-22,0-43.3,0-64.6c0-5.9-1-12.2,7.4-13.4
              c0,0,4.3-1.5,7.4-1.5s17.8,2.5,17.8,2.5c0,26.7,0,51.4,0,76.9c6.9,0,12.4,0,19.3,0c0,30.9,0,61.1,0,91.3c5.3,2.7,9.5,4.8,12.6,6.4
              c0,44.6,0,88.2,0,132.5c5.7,0,10.6,0,15.6,0c0-2.7-0.1-4.7,0-6.7c2-33.2,3.5-66.4,6.4-99.4c0.5-6.1,6.8-11.6,11.2-18.6
              c9.1,0,19.5,0,30.4,0c18.5,17.7,5.3,42.2,11.7,64.2c3.4,1.1,7.4,2.5,12.3,4.1c0,30.4,0,61.6,0,93.5c3.7,0,6.7,0,11.1,0
              c0-21.5,0.1-42.3-0.1-63.1c-0.1-9.8,10.2-23.9,21.6-24.2l1.9,0.3c11.5-0.3,22.6,15.2,22.5,25.4c-0.1,14.8-0.2,29.7,0.1,44.5
              c0.1,6,1.4,12.1,2.1,17.8c16.1,0,30,0,44.6,0c0.3-5.4,0.7-10.9,0.7-16.3c0.1-30.7,1.4-61.5-0.4-92c-1.8-31,2.3-58.8,27.1-78.2
              c0-15.3,0-28.7,0-42.1V228c13.9,14.7,26.9,29,25.6,52c-1.5,27.6-0.4,55.4-0.4,83.9c8.4,0,15.3,0,23.8,0c0-7.1,0-13.6,0-20
              c0-64.3,0-128.7,0-193c0-14.3,12-30.5,23.8-31c12.3-0.6,24.7-0.1,36.1-0.1c17.4,25,17.4,25,17.4,54.9c0,67.3,0,134.6,0,202.2
              c4.9,0.5,9.8,1,16.3,1.7c0-14.8,0-27.7,0-39.1c4.7-2.4,7.7-3.9,10.2-5.1c1.5-8.3,2.9-15.9,4.2-23.1c9.8,0,17.7,0,25.8,0
              c0.9,7.9,1.8,15.8,2.8,24.5c14.9,0,29.7,0,45.6,0c1.6,3.1,3.7,7.3,6.1,11.9c6.7,0,13.2,0,20.4,0c0-35.9,0-71,0-107.7
              c21.5,0,42.3,0,64.6,0c0,51,0,100.5,0,151.5c17.3,0,33.2,0,50.5,0c0-9.8-3.3-20.7,0.7-26.2c7.3-9.9,6-19.9,6.8-30.2
              c0.2-2.6,1.2-5.1,2-8.2c10.8,0,20.7,0,31.9,0c1.1,10.1,2.1,19.5,3.2,29.7c12.9,0,25.8,0,39.5,0c1.5-32.5,3-64.2,4.4-95
              c13.1,0,22.5,0,33.4,0c0,17.5,0,34.4,0,52.7c6.4,0,11.4,0,17.8,0c0,13.3,0,25.3,0,37.7c8.4,1.7,15.4,3.1,23.8,4.8
              c0,5.5,0,10.5,0,16.2c5.4,0,9.4,0,14.8,0c0-25.5,0-50.3,0-77.2c16.8,0,32.1,0,47.5,0c0-5.2,0-8.2,0-11.9c10.9,0,21.8,0,33.4,0
              c0,38.4,0,76,0,112.1c16.1,0,31.4,0,46.8,0c0-7.9,0-14.4,0-20.8c0-3,0.1-5.9,0-8.9c-0.5-9.5,1.9-16.4,13.4-16.4
              c10.4,0,16.2,5.2,16.3,16.4c0.2,24.8,0.1,49.5,0.1,75c8.4,0,15.3,0,23.5,0c1.1-9,2.2-17.5,3.3-26.7c2.4,0,4.9,0,8.9,0
              c0-25-0.1-49.2,0.1-73.5c0-4,0.6-9.8,3.1-11.5c4.5-3,11.2-5.6,15.9-4.3c6.5,1.7,11,7,10.8,15.8c-0.7,24.2-0.2,48.5-0.2,72.4
              c23.3,4.9,7.6,24.2,16.5,35.2c9.7,0,21.1,0,33.2,0c0,4.7,0,79.6,0,85c-51.7,0-95,0.1-146,0.1 M993.6,259.1 M416,308.1 M254.2,66.1"
            />
            <path id="tower1" className="svg-line" d="M251.2,68.9V1" />
            <path id="tower2" className="svg-line" d="M234.2,68.9V1" />
          </svg>
          <h1>Rooted in Chicago</h1>
          <div className="sec dance">
            <h2>Urban Dance Teams</h2>
            <a
              href="https://www.youtube.com/watch?v=T1Rh9zFhhog"
              target="_blank"
            >
              <img
                className="youtube"
                src="/images/youtube.svg"
                alt="Youtube Logo"
              />
              <p>The Piecemakers</p>
            </a>
            <a
              href="https://www.youtube.com/watch?v=2MUcmDKKZBc"
              target="_blank"
            >
              <img
                className="youtube"
                src="/images/youtube.svg"
                alt="Youtube Logo"
              />
              <p>Create InMotion Dance Family</p>
            </a>
          </div>
          <div className="sec canoe">
            <h2>Volunteer Canoe Guide</h2>
            <a
              href="https://www.chicagoriver.org/get-involved/attend/take-a-canoe-trip"
              target="_blank"
            >
              <img
                className="youtube"
                src="/images/canoe.svg"
                alt="Canoe Logo"
              />
              <p>Friends of the Chicago River</p>
            </a>
          </div>
          <div className="sec streets">
            <h2>Safe Streets Advocate</h2>
            <a href="https://www.bikelaneuprising.com/" target="_blank">
              <img
                className="skateboard"
                src="/images/skateboard.svg"
                alt="Skateboard Logo"
              />
              <p>Bike Lane Uprising</p>
            </a>
          </div>
          <div className="mobile-links">
            <h2>Urban Dance Teams</h2>
            <a
              href="https://www.youtube.com/watch?v=T1Rh9zFhhog"
              target="_blank"
            >
              <img
                className="youtube"
                src="/images/youtube.svg"
                alt="Youtube Logo"
              />
              <p>The Piecemakers</p>
            </a>
            <a
              href="https://www.youtube.com/watch?v=2MUcmDKKZBc"
              target="_blank"
            >
              <img
                className="youtube"
                src="/images/youtube.svg"
                alt="Youtube Logo"
              />
              <p>Create InMotion Dance Family</p>
            </a>
            <h2>Volunteer Canoe Guide</h2>
            <a
              href="https://www.chicagoriver.org/get-involved/attend/take-a-canoe-trip"
              target="_blank"
            >
              <img
                className="youtube"
                src="/images/canoe.svg"
                alt="Canoe Logo"
              />
              <p>Friends of the Chicago River</p>
            </a>
            <h2>Safe Streets Advocate</h2>
            <a href="https://www.bikelaneuprising.com/" target="_blank">
              <img
                className="skateboard"
                src="/images/skateboard.svg"
                alt="Skateboard Logo"
              />
              <p>Bike Lane Uprising</p>
            </a>
          </div>
        </section>
      </main>
    )
  }
}

export default Community
