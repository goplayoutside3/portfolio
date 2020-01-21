const Toolbox = () => {
  return (
      <div className="row">
        <div className="col-sm-4 col-lg-3 col-6 list">
          <ul className="technologies">
            <li>Javascript</li>
            <li>React</li>
            <li>Git</li>
            <li>Firebase</li>
            <li>Express</li>
          </ul>
        </div>

        <div className="col-sm-4 col-lg-3 col-6 list">
          <ul className="technologies">
            <li>CSS Animations</li>
            <li>Green Sock</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Prismic</li>
          </ul>
        </div>
        <div className="col-sm-4 col-lg-3 col-12 list">
          <img
            className="tool"
            src="/images/toolbox.svg"
            alt="Image of a toolbox"
          />
        </div>
      </div>
  )
}

export default Toolbox
