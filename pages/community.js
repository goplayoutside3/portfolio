import React, { Component } from 'react'
import '../gsap/gsap.min.js'
import DrawSVGPlugin from '../gsap/DrawSVGPlugin.min.js'

class Community extends Component {
  constructor(props) {
    super(props)
    this.state = { scrolled: false}
  }

  componentDidMount() {
    this.drawSkyline()
    this.handleScroll()
    this.drawOne.seek(0)
  }

  drawSkyline = () => {
    const skyline = new TimelineLite().from('.skyline', 5, {
      drawSVG: '60%',
      ease: 'power4.out',
    })

    const drawOne = new TimelineLite({ paused: true }).from('.line-one', 1, {
      drawSVG: '0%',
    })
    this.drawOne = drawOne

    const drawTwo = new TimelineLite({ paused: true }).from('.line-two', 1, {
      drawSVG: '0%',
    })
    this.drawTwo = drawTwo

    const drawThree = new TimelineLite({ paused: true }).from(
      '.line-three',
      1,
      {
        drawSVG: '0%',
      }
    )
    this.drawThree = drawThree
  }
  
  roundOff = progress => Math.round(progress * 100) / 100

  handleScroll = () => {
    const ScrollMagic = require('scrollmagic')
    const controller = new ScrollMagic.Controller()

    const sectionOneScene = new ScrollMagic.Scene({
      duration: '100%',
      triggerElement: '#section-one',
      triggerHook: 0.6,
      reverse: true,
    })
      .addTo(controller)
      .on('progress', event => {
        this.handleFirstSroll(event)
        // this.drawOne.progress(roundOff(event.progress))
      })

    const sectionTwoScene = new ScrollMagic.Scene({
      duration: '100%',
      triggerElement: '#section-two',
      triggerHook: 0.6,
      reverse: true,
    })
      .addTo(controller)
      .on('progress', event => {
        this.drawTwo.progress(this.roundOff(event.progress))
      })

    const sectionThreeScene = new ScrollMagic.Scene({
      duration: '80%',
      triggerElement: '#section-three',
      triggerHook: 0.6,
      reverse: true,
    })
      .addTo(controller)
      .on('progress', event => {
        this.drawThree.progress(this.roundOff(event.progress))
      })
  }

  handleFirstSroll = (event) => {
    if (window.scrollY < 20) return
    else this.drawOne.progress(this.roundOff(event.progress))
  }

  render() {
    return (
      <main className="community">
        <div className="skyline-cont">
          <svg
            className="scrolling-anim"
            x="0px"
            y="0px"
            viewBox="0 0 450.5 183.5"
          >
            <path
              id="skyline"
              className="svg-line skyline"
              d="M49.2,182.4c-40.4,0-10.3,0-48.2,0c0-1.7,0-26.6,0-28c3.9-0.2,8.1-0.5,12.5-0.7c0-4.7,0-8.9,0-13.3
              c4.8-0.2,9.3-0.4,14.2-0.6c0-13,0-25.3,0-38.1c2.2,0,3.8,0,5.8,0c0-9.7,0-18.8,0-28c1.5-1.5,2.8-2.8,3.8-3.8
              c4.3-0.9,7.7-0.2,9.7,4.2c0,8.7,0,17.9,0,27.6c1.9,0,3.6,0,5.8,0c0,8.5,0,16.5,0,24.6c1.3,0.3,2.2,0.4,3,0.6c0.4,2.1,0.7,4,0.9,5.5
              c1.7,0,3.4,0,4.9,0c0.6-2.5,1.1-4.7,1.6-7c2.3,0,4.2,0,6.5,0c0-13.9,0-27.6,0-41.4c1.3-0.3,2.2-0.4,3.5-0.7c0-10.4,0-20.5,0-31
              c1.3,0,2.2,0,3.5,0c0-7.4,0-14.6,0-21.8c0-2-0.3-4.1,2.5-4.5c0,0,1.4-0.5,2.5-0.5s6,0.9,6,0.9c0,9,0,17.3,0,25.9c2.3,0,4.2,0,6.5,0
              c0,10.4,0,20.6,0,30.7c1.8,0.9,3.2,1.6,4.2,2.2c0,15,0,29.7,0,44.6c1.9,0,3.6,0,5.2,0c0-0.9,0-1.6,0-2.2c0.7-11.2,1.2-22.3,2.1-33.5
              c0.2-2,2.3-3.9,3.8-6.3c3.1,0,6.6,0,10.2,0c6.2,6,1.8,14.2,3.9,21.6c1.1,0.4,2.5,0.8,4.2,1.4c0,10.3,0,20.8,0,31.5
              c1.2,0,2.2,0,3.8,0c0-7.2,0.1-14.2,0-21.2c0-3.3,3.4-8.1,7.3-8.2l0.7,0.1c3.9-0.1,7.6,5.1,7.6,8.6c0,5-0.1,10,0,15
              c0,2,0.5,4.1,0.7,6c5.4,0,10.1,0,15,0c0.1-1.8,0.2-3.7,0.2-5.5c0-10.3,0.5-20.7-0.1-31c-0.6-10.4,0.8-19.8,9.1-26.3
              c0-5.2,0-9.7,0-14.2v14c4.7,4.9,9,9.8,8.6,17.5c-0.5,9.3-0.1,18.7-0.1,28.2c2.8,0,5.2,0,8,0c0-2.4,0-4.6,0-6.8c0-21.7,0-43.3,0-65
              c0-4.8,4.1-10.3,8-10.5c4.2-0.2,8.3,0,12.2,0c5.8,8.4,5.8,8.4,5.8,18.5c0,22.7,0,45.3,0,68.1c1.6,0.2,3.3,0.3,5.5,0.6
              c0-5,0-9.3,0-13.2c1.6-0.8,2.6-1.3,3.4-1.7c0.5-2.8,1-5.3,1.4-7.8c3.3,0,6,0,8.7,0c0.3,2.7,0.6,5.3,0.9,8.2c5,0,10,0,15.4,0
              c0.5,1,1.3,2.5,2,4c2.3,0,4.4,0,6.9,0c0-12.1,0-23.9,0-36.2c7.2,0,14.2,0,21.8,0c0,17.2,0,33.8,0,51c5.8,0,11.2,0,17,0
              c0-3.3-1.1-7,0.2-8.8c2.5-3.3,2-6.7,2.3-10.2c0.1-0.9,0.4-1.7,0.7-2.8c3.6,0,7,0,10.7,0c0.4,3.4,0.7,6.6,1.1,10c4.3,0,8.7,0,13.3,0
              c0.5-10.9,1-21.6,1.5-32c4.4,0,7.6,0,11.2,0c0,5.9,0,11.6,0,17.8c2.2,0,3.8,0,6,0c0,4.5,0,8.5,0,12.7c2.8,0.6,5.2,1,8,1.6
              c0,1.9,0,3.5,0,5.4c1.8,0,3.2,0,5,0c0-8.6,0-16.9,0-26c5.7,0,10.8,0,16,0c0-1.8,0-2.8,0-4c3.7,0,7.3,0,11.2,0c0,12.9,0,25.6,0,37.8
              c5.4,0,10.6,0,15.8,0c0-2.7,0-4.8,0-7c0-1,0-2,0-3c-0.2-3.2,0.6-5.5,4.5-5.5c3.5,0,5.5,1.7,5.5,5.5c0.1,8.3,0,16.7,0,25.2
              c2.8,0,5.2,0,7.9,0c0.4-3,0.7-5.9,1.1-9c0.8,0,1.7,0,3,0c0-8.4,0-16.6,0-24.7c0-1.3,0.2-3.3,1-3.9c1.5-1,3.8-1.9,5.4-1.5
              c2.2,0.6,3.7,2.4,3.6,5.3c-0.2,8.2-0.1,16.3-0.1,24.4c7.9,1.6,2.6,8.1,5.6,11.9c3.3,0,7.1,0,11.2,0c0,1.6,0,26.8,0,28.6
              c-17.4,0-35.8-0.1-52.9-0.1 M335.2,90.1 M140.8,106.6 M86.2,25.1"
            />
            <path id="tower1" className="svg-line" d="M85.3,26V3.2" />
            <path id="tower2" className="svg-line" d="M79.5,26V3.2" />
          </svg>
          <h1 className="chicago">Rooted in Chicago</h1>
        </div>
        <section id="section-one">
          <svg
            className="right-border"
            x="0px"
            y="0px"
            viewBox="0 0 33.1 127"
            preserveAspectRatio="none"
          >
            <path
              className="border-line line-one"
              d="M32.1,1L32,61H1v5l31.1,0L32,126"
            />
          </svg>
          <h2>Urban Dance Teams</h2>
          <a href="https://www.youtube.com/watch?v=T1Rh9zFhhog" target="_blank">
            <img
              className="youtube"
              src="/images/youtube.svg"
              alt="Youtube Logo"
            />
            <p>The Piecemakers</p>
          </a>
          <a href="https://www.youtube.com/watch?v=2MUcmDKKZBc" target="_blank">
            <img
              className="youtube"
              src="/images/youtube.svg"
              alt="Youtube Logo"
            />
            <p>Create InMotion Dance Family</p>
          </a>
        </section>
        <section id="section-two">
          <svg
            className="right-border"
            x="0px"
            y="0px"
            viewBox="0 0 33.1 127"
            preserveAspectRatio="none"
          >
            <path
              className="border-line line-two"
              d="M32.1,1L32,61H1v5l31.1,0L32,126"
            />
          </svg>
          <h2>Volunteer Canoe Guide</h2>
          <a
            href="https://www.chicagoriver.org/get-involved/attend/take-a-canoe-trip"
            target="_blank"
          >
            <img className="youtube" src="/images/canoe.svg" alt="Canoe Logo" />
            <p>Friends of the Chicago River</p>
          </a>
        </section>
        <section id="section-three">
          <svg
            className="right-border"
            x="0px"
            y="0px"
            viewBox="0 0 33.1 127"
            preserveAspectRatio="none"
          >
            <path
              className="border-line line-three"
              d="M32.1,1L32,61H1v5l31.1,0L32,126"
            />
          </svg>
          <h2>Safe Streets Advocate</h2>
          <a href="https://www.bikelaneuprising.com/" target="_blank">
            <img
              className="skateboard"
              src="/images/skateboard.svg"
              alt="Skateboard Logo"
            />
            <p>Bike Lane Uprising</p>
          </a>
        </section>
      </main>
    )
  }
}

export default Community
