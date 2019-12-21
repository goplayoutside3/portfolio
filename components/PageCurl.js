import Tween from '../gsap/gsap.min.js'
import MorphSVGPlugin from '../gsap/MorphSVGPlugin.min.js'

const pageColor = '#fdf6e4'
const duration = 0.4

const handleHover = z => {
  // const openPageBottom = Tween.to(`#page-closed${z}`, duration, {
  //   morphSVG: {shape: `#page-open${z}`, shapeIndex: 'auto'},
  // })

  // const openPageShadow = Tween.to(`#page-closed-shadow${z}`, duration, {
  //   morphSVG: `#page-open-shadow${z}`,
  // })

  const openCurl = Tween.to(`#curl-closed${z}`, duration, {
    morphSVG: `#curl-open${z}`,
  })
  // const openCurlShadow = Tween.to(`#curl-closed-shadow${z}`, duration, {
  //   morphSVG: `#curl-open-shadow${z}`,
  // })
}

const handleLeave = z => {
  // const openPageBottom = Tween.to(`#page-closed${z}`, duration, {
  //   morphSVG: {shape: `#page-closed${z}`, shapeIndex: '12'},
  // })
  // const openPageShadow = Tween.to(`#page-closed-shadow${z}`, duration, {
  //   morphSVG: `#page-closed-shadow${z}`,
  // })
  const openCurl = Tween.to(`#curl-closed${z}`, duration, {
    morphSVG: `#curl-closed${z}`,
  })
  // const openCurlShadow = Tween.to(`#curl-closed-shadow${z}`, duration, {
  //   morphSVG: `#curl-closed-shadow${z}`,
  // })
}

const PageCurl = ({ image = '', z = '1' }) => {
  return (
    <div
      className="col"
      style={{ zIndex: z }}
      onMouseOver={() => handleHover(z)}
      onMouseOut={() => handleLeave(z)}
    >
      <div className="thumbnail" style={{ backgroundImage: `url(${image})` }} />
      <svg
        className="page"
        viewBox="0 0 517 605.01"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          id={`page-closed-shadow${z}`}
          className="page-closed-shadow"
          points="377.27 604.51 172.77 605.01 41 5 377.27 4.51 377.27 604.51"
          style={{ fill: 'gray', opacity: 0.7 }}
        />
        <polygon
          id={`page-open-shadow${z}`}
          className="page-open-shadow"
          points="378.06 602.14 273 603 130 3 378.06 2.14 378.06 602.14"
          style={{ fill: 'gray', opacity: 0.7 }}
        />
        <polygon
          id={`page-closed${z}`}
          className="page-closed"
          points="44.23 3 399 2.5 399 602 198.94 602.5 44.23 3"
          style={{ fill: pageColor, stroke: "black", strokeWidth: "5px" }}
        />
        <polygon
          id={`page-open${z}`}
          className="page-open"
          points="300.9 602.5 133.29 3.37 402.5 2.51 402.5 602.5 300.9 602.5"
          style={{ fill: pageColor, stroke: "black", strokeWidth: "5px" }}
        />

        <text className="title" x="180" y="80">
          Title Lorem
        </text>
        <text className="title" x="180" y="120">
          Ipsum
        </text>

        <rect
          id="guide"
          x="2.5"
          y="2.5"
          width="400"
          height="600"
          style={{
            fill: 'none',
            stroke: '#000',
            strokeMiterlimit: 10,
            strokeWidth: '5px',
          }}
        />

        <path
          id={`curl-closed-shadow${z}`}
          className="curl-closed-shadow"
          d="M368,476c-79,7-141.5,57-171.09,129L40.91,5H57.14Z"
          style={{ fill: 'gray', opacity: 0.7 }}
        />
        <path
          id={`curl-open-shadow${z}`}
          className="curl-open-shadow"
          d="M517,525c-79,7-189.41,2-219,74L130,3h14Z"
          style={{ fill: 'gray', opacity: 0.7 }}
        />

        <path
          id={`curl-closed${z}`}
          className="curl-closed"
          d="M44,2.51H55.67L362.29,457.28c-36.7.51-71.15,16.12-102.45,46.42-24.54,23.77-46.57,56.77-62.5,93.51Z"
          style={{ fill: pageColor, stroke: "black", strokeWidth: "5px" }}
        />
        <path
          id={`curl-open${z}`}
          className="curl-open"
          d="M133.29,2.5h9.46L512,497.94h-1.06c-82.25,0-179.48,34.23-211.36,99.72Z"
          style={{ fill: pageColor, stroke: "black", strokeWidth: "5px" }}
        />

      </svg>
    </div>
  )
}

export default PageCurl
