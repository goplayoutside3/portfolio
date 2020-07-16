import Footer from './Footer'
import ErrorBoundary from './Error'
import Head from 'next/head'

const Layout = ({ children, title = 'Delilah Clement', description = 'Portfolio Website for Delilah Clement, a front-end web developer' }) => (
  <div>
    <Head>
      <title>{title}</title>

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="keywords"
        content={`delilah clement portfolio web developer`}
      />

      <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico"></link>
      <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.svg"></link>
      <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png"></link>

      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={'https://delilahclement.dev/'} />
      <meta property="og:image" content={'/images/share.jpg'} />
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
    </Head>

    <ErrorBoundary>
      {children}
      <Footer />
    </ErrorBoundary>
  </div>
)

export default Layout
