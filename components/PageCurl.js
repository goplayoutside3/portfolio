import { Tween } from '../gsap/gsap.min.js'
const pageColor = '#fdf6e4'

const handleHover = () => {
  const openTweenBottom = Tween.to('#page-closed-bottom', 1, {
    morphSVG: '#page-open-bottom',
  })

  const openTweenTop = Tween.to('#page-closed-top', 1, {
    morphSVG: '#page-open-top',
  })
}

const PageCurl = ({ image }) => {
  return (
    <div className="col">
      <div className="thumbnail" style={{ backgroundImage: `url(${image})` }} />
      <svg
        id="page"
        className="page-closed"
        viewBox="0 0 517 605.01"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          id="page-closed-shadow"
          points="377.27 604.51 172.77 605.01 41 5 377.27 4.51 377.27 604.51"
          style={{ fill: 'gray', opacity: 0.7 }}
        />
        <polygon
          id="page-open-shadow"
          points="378.06 602.14 273 603 130 3 378.06 2.14 378.06 602.14"
          style={{ fill: 'gray', opacity: 0.7 }}
        />
        <polygon
          id="page-closed"
          points="44.23 3 399 2.5 399 602 198.94 602.5 44.23 3"
          style={{ fill: pageColor }}
        />
        <polygon
          id="page-open"
          points="300.9 602.5 133.29 3.37 402.5 2.51 402.5 602.5 300.9 602.5"
          style={{ fill: pageColor }}
        />

        <text id="title" x="100" y="60" >Title Lorem Ipsum</text>

        <path
          id="page-closed-outline"
          d="M396.5,5v594.5L200.87,600,47.45,5.49,396.5,5m5-5L41,.5,197,605l204.5-.5V0Z"
        />
        <path
          id="page-open-outline"
          d="M400,5V600H302.79L136.58,5.86,400,5m5-5L130,.88,299,605H405V0Z"
        />

        <path
          id="curl-closed-shadow"
          d="M368,476c-79,7-141.5,57-171.09,129L40.91,5H57.14Z"
          style={{ fill: 'gray', opacity: 0.7 }}
        />
        <path
          id="curl-open-shadow"
          d="M517,525c-79,7-189.41,2-219,74L130,3h14Z"
          style={{ fill: 'gray', opacity: 0.7 }}
        />
        <path
          id="curl-closed"
          d="M44,2.51H55.67L362.29,457.28c-36.7.51-71.15,16.12-102.45,46.42-24.54,23.77-46.57,56.77-62.5,93.51Z"
          style={{ fill: pageColor }}
        />
        <path
          id="curl-open"
          d="M133.29,2.5h9.46L512,497.94h-1.06c-82.25,0-179.48,34.23-211.36,99.72Z"
          style={{ fill: pageColor }}
        />

        <path
          id="curl-closed-outline"
          d="M54.34,5,357.68,454.93a136.07,136.07,0,0,0-51.27,12.92c-16.86,7.89-33.12,19.35-48.31,34.06-23.3,22.57-44.34,53.35-60.12,87.74L47.23,5h7.11M57,0H40.77l156,605C226,533.3,284.57,459.76,364.15,459.77c.94,0,1.9,0,2.85,0L57,0Z"
        />
        <path
          id="curl-open-outline"
          d="M141.49,5,507,495.47c-41.86.55-86.59,10-123.34,26.23-39.15,17.24-67.71,41-83.42,69.2L136.59,5h4.9M144,0H130L299,605c28.85-70.53,131.68-104.56,211.91-104.56,2,0,4.08,0,6.09.07L144,0Z"
        />

        <rect
          id="guide"
          className="page-closed"
          x="0"
          y="0"
          width="400"
          height="600"
          style={{
            fill: 'none',
            stroke: '#000',
            strokeMiterlimit: 10,
            strokeWidth: '5px',
          }}
        />
      </svg>
    </div>
  )
}

export default PageCurl
