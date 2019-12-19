import { Tween } from '../gsap/gsap.min.js'

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
      <svg id="page" className="page-closed" viewBox="0 0 517 605.01">
        <polygon
          id="page-closed-shadow"
          points="377.27 604.51 172.77 605.01 41 5 377.27 4.51 377.27 604.51"
          style={{ fill: 'gray', opacity: 0.7 }}
        />

        <polygon
          id="page-closed"
          points="44.23 3 399 2.5 399 602 198.94 602.5 44.23 3"
          style={{ fill: '#fdf6e4' }}
        />
        <path
          id="page-closed-outline"
          d="M396.5,5v594.5L200.87,600,47.45,5.49,396.5,5m5-5L41,.5,197,605l204.5-.5V0Z"
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
      {/* <img
        id="page-closed-bottom"
        className="page-closed"
        src="/images/page-curl-closed-bottom.svg"
        alt=""
      />
      <img
        id="page-closed-top"
        className="page-closed"
        src="/images/page-curl-closed-top.svg"
        alt=""
      />
      <img
        id="page-open-bottom"
        className="page-open"
        src="/images/page-curl-open-bottom.svg"
        alt=""
      />
      <p className="title">Title Lorem Ipsem</p>
      <img
        id="page-open-top"
        className="page-open"
        src="/images/page-curl-open-top.svg"
        alt=""
      /> */}
    </div>
  )
}

export default PageCurl
