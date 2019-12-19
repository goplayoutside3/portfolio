const PageCurl = ({ image }) => {
  return (
    <div className="col">
      <div className="thumbnail" style={{ backgroundImage: `url(${image})` }} />
      {/* <img className="page-closed" src="/images/page-curl-closed-bottom.svg" alt="" />
      <img className="page-closed" src="/images/page-curl-closed-top.svg" alt="" /> */}
      <img className="page-open" src="/images/page-curl-open-bottom.svg" alt="" />
      <p className="title">Title Lorem Ipsem</p>
      <img className="page-open" src="/images/page-curl-open-top.svg" alt="" />
    </div>
  )
}

export default PageCurl
