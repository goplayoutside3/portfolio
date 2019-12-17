import Navbar from './Navbar'
import ErrorBoundary from './Error'
import Head from 'next/head'

const Layout = ({ children, title = 'Delilah Clement', description = '' }) => (
  <div>
    <Head>
      <title>{title}</title>

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="keywords"
        content={`delilah clement portfolio web developer`}
      />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={''} />
      <meta property="og:image" content={''} />
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
    </Head>

      <Navbar />
    <ErrorBoundary>
      {children}
      <footer className="container">© 2019 Delilah Clement. All rights reserved.</footer>
    </ErrorBoundary>
  </div>
)

export default Layout
