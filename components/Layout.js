import Navbar from './Navbar'
import Head from 'next/head'

const Layout = ({ children, title = 'Delilah Clement', description }) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href={`/images/longboard.svg`} />
      <link rel="icon" href={`/images/longboard.svg`} />

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={`${description} | ${title}`} />
      <meta name="keywords" content={`delilah clement portfolio web developer`} />

      <meta property="og:title" content={`${description} | ${title}`} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={''} />
      <meta property="og:image" content={''} />
      <meta property="og:description" content={`${description} | ${title}`} />
      <meta property="og:site_name" content={title} />
    </Head>

    <Navbar />
    {children}
  </div>
)

export default Layout
