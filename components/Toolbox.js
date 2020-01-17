const Toolbox = () => {
  return (
    <section className="toolbox">
      <div className="row">
        <div className="col-lg-3 col-12 list">
          <img
            className="tool"
            src="/images/toolbox.svg"
            alt="Image of a toolbox"
          />
        </div>
        <div className="col-lg-3 col-12 list">
          <ul className="technologies">
            <li>Javascript</li>
            <li>React</li>
            <li>Git</li>
            <li>Prismic</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div className="col-lg-3 col-12 list">
          <img
            className="tool"
            src="/images/paints.svg"
            alt="Image of paintbrushes"
          />
        </div>
        <div className="col-lg-3 col-12 list">
          <ul className="technologies">
            <li>CSS Animations</li>
            <li>Green Sock</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Toolbox
