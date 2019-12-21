import Tween from '../gsap/gsap.min.js'
import MorphSVGPlugin from '../gsap/MorphSVGPlugin.min.js'

const pageBottomColor = '#f6e5d1'
const pageTopColor = '#c0766c'
const duration = 0.4

const handleHover = z => {
  const openPageBottom = Tween.to(`#page-closed${z}`, duration, {
    morphSVG: { shape: `#page-open${z}`, shapeIndex: 'auto' },
  })
  const openPageShadow = Tween.to(`#page-closed-shadow${z}`, duration, {
    morphSVG: `#page-open-shadow${z}`,
  })
  const openCurl = Tween.to(`#curl-closed${z}`, duration, {
    morphSVG: `#curl-open${z}`,
  })
  const openCurlShadow = Tween.to(`#curl-closed-shadow${z}`, duration, {
    morphSVG: `#curl-open-shadow${z}`,
  })
}

const handleLeave = z => {
  const openPageBottom = Tween.to(`#page-closed${z}`, duration, {
    morphSVG: { shape: `#page-closed${z}`, shapeIndex: '12' },
  })
  const openPageShadow = Tween.to(`#page-closed-shadow${z}`, duration, {
    morphSVG: `#page-closed-shadow${z}`,
  })
  const openCurl = Tween.to(`#curl-closed${z}`, duration, {
    morphSVG: `#curl-closed${z}`,
  })
  const openCurlShadow = Tween.to(`#curl-closed-shadow${z}`, duration, {
    morphSVG: `#curl-closed-shadow${z}`,
  })
}

const PageCurl = ({ image = '', z = '1', title = '', site = '' }) => {
  return (
    <div
      className="col"
      style={{ zIndex: z }}
      onMouseOver={() => handleHover(z)}
      onMouseOut={() => handleLeave(z)}
    >
      <a className="site-cta" href={site} target="_blank">
        <div
          className="thumbnail"
          style={{ backgroundImage: `url(${image})` }}
        />
        <svg
          id="closed-page-paths"
          className="page"
          viewBox="0 0 517 605.01"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id={`page-closed-shadow${z}`}
            className="page-closed-shadow"
            d="M377.3,604.5L172.8,605L41,5l336.3-0.5V604.5z"
            style={{ fill: 'black', opacity: 0.5 }}
          />
          <path
            id={`page-closed${z}`}
            className="page-closed"
            d="M401.5,604.5L197,605L41,0.5L401.5,0V604.5z"
            style={{ fill: pageBottomColor }}
          />
          <rect
            id="guide"
            x="2.5"
            y="2.5"
            width="400"
            height="600"
            style={{
              fill: 'none',
              stroke: 'black',
              strokeMiterlimit: 10,
              strokeWidth: '5px',
            }}
          />
        </svg>

        <p className="title">{title}</p>

        <svg
          id="closed-curl-paths"
          className="page"
          viewBox="0 0 517 605.01"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id={`curl-closed-shadow${z}`}
            className="curl-closed-shadow"
            d="M368,476c-79,7-141.5,57-171.09,129L40.91,5H57.14Z"
            style={{ fill: 'black', opacity: 0.5 }}
          />
          <path
            id={`curl-closed${z}`}
            className="curl-closed"
            d="M44,2.51H55.67L362.29,457.28c-36.7.51-71.15,16.12-102.45,46.42-24.54,23.77-46.57,56.77-62.5,93.51Z"
            style={{ fill: pageTopColor, stroke: 'black', strokeWidth: '5px' }}
          />
        </svg>

        <svg
          id="open-curl-paths"
          className="page"
          viewBox="0 0 517 605.01"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id={`page-open-shadow${z}`}
            className="page-open-shadow"
            d="M378.1,602.1L273,603L130,3l248.1-0.9V602.1z"
            style={{ fill: 'black', opacity: 0.5 }}
          />
          <path
            id={`page-open${z}`}
            className="page-open"
            d="M405,605H299L130,0.9L405,0V605z"
            style={{ fill: pageBottomColor }}
          />

          <path
            id={`curl-open-shadow${z}`}
            className="curl-open-shadow"
            d="M517,525c-79,7-189.41,2-219,74L130,3h14Z"
            style={{ fill: 'black', opacity: 0.5 }}
          />

          <path
            id={`curl-open${z}`}
            className="curl-open"
            d="M133.29,2.5h9.46L512,497.94h-1.06c-82.25,0-179.48,34.23-211.36,99.72Z"
            style={{ fill: pageTopColor, stroke: 'black', strokeWidth: '5px' }}
          />
        </svg>
      </a>
    </div>
  )
}

export default PageCurl
