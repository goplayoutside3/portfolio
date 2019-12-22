import Tween from '../gsap/gsap.min.js'
import MorphSVGPlugin from '../gsap/MorphSVGPlugin.min.js'

const pageTopColor = 'white'
const pageBottomColor = '#b0d9f0'

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
      className="svg-wrapper"
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
          viewBox="0 0 512 598.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id={`page-closed-shadow${z}`}
            className="page-closed-shadow"
            d="M375.4,598.8l-204.5,0.5L39.1-0.3l336.3-0.5V598.8z"
            style={{ fill: 'black', opacity: 0.5 }}
          />
          <path
            id={`page-closed${z}`}
            className="page-closed"
            d="M399.6,598.8l-204.5,0.5L39.1-0.3l360.5-0.5V598.8z"
            style={{ fill: pageBottomColor }}
          />
          <rect
            id="guide"
            x="0.1" y="-0.8"
            width="400"
            height="600"
            style={{
              fill: 'none',
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
            d="M366.2,470.5c-79,7-141.5,57-171.1,129l-156-600l16.2,0L366.2,470.5z"
            style={{ fill: 'black', opacity: 0.5 }}
          />
          <path
            id={`curl-closed${z}`}
            className="curl-closed"
            d="M365.4,455.5c-81-1.8-140.6,72-170.2,144l-156-600l16.2,0L365.4,455.5z"
            style={{ fill: pageTopColor }}
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
            d="M400,599H294L125-0.1l275.1-0.4L400,599z"
            style={{ fill: pageBottomColor }}
          />

          <path
            id={`curl-open-shadow${z}`}
            className="curl-open-shadow"
            d="M513,525c-79,7-189.4,2.1-219,74.5L126-0.5h13.1L513,525z"
            style={{ fill: 'black', opacity: 0.5 }}
          />

          <path
            id={`curl-open${z}`}
            className="curl-open"
            d="M512,495.9c-81-1.8-188.4,31.9-218,103.6L125-0.5h14L512,495.9z"
            style={{ fill: pageTopColor }}
          />
        </svg>
      </a>
    </div>
  )
}

export default PageCurl
