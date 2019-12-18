const Toolbox = () => {
  return (
    <section className="toolbox">
      <div className="box-cont">
        <img className="box back" src="/images/box-back.svg" alt="" />
        <div className="tool-cont wrench">
          <img className="tool" src="/images/wrench.svg" alt="Wrench" />
          <p className="label git">Git</p>
        </div>
        <div className="tool-cont hammer">
          <img className="tool" src="/images/hammer.svg" alt="Hammer" />
          <p className="label javascript">Javascript</p>
        </div>
        <img className="box front" src="/images/box-front.svg" alt="Toolbox" />
        <h3 className="technologies">Technologies</h3>
      </div>
      <div className="box-cont">
        <div className="tool-cont palette">
          <img
            className="tool"
            src="/images/palette.svg"
            alt="Art Palette"
          />
          <p className="label css">CSS</p>
        </div>
        <img className="" src="" alt="" />
      </div>
    </section>
  )
}

export default Toolbox
