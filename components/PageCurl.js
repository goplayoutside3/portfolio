const PageCurl = ({ image }) => {
  return (
    <div className="col">
      <div className="thumbnail" style={{ backgroundImage: `url(${image})` }} />
      <img className="page-closed" src="/images/page-closed.svg" alt="" />
    </div>
  )
}

export default PageCurl
