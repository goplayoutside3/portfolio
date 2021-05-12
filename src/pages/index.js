import styles from '../styles/layouts/home.module.scss'
import classes from 'classnames'
import { PageCurl } from '../components'

const Homepage = ({ isMobile }) => {
  return (
    <main id={styles.home}>
      <section className={classes(styles.hero)}>
        <div className={styles['hero-copy']}>
          <h1>I&apos;m Delilah</h1>
          <h2 className="h3">a fullstack web developer</h2>
        </div>
      </section>
      <section className={classes(styles.work, 'container')}>
        <h2 className={classes(styles['professional-work'], 'h2')}>Professional Work</h2>
        <div className={styles['projects-cont']}>
          <PageCurl
            image="/images/globe.jpg"
            z="4"
            site="https://www.nationalgeographic.com/partner-content-dow-closing-the-loop/"
            isMobile={isMobile}
          />
          <PageCurl
            image="/images/reimagine.jpg"
            z="3"
            site="https://www.reimaginegender.org/"
            isMobile={isMobile}
          />
          <PageCurl
            image="/images/zooniverse.jpg"
            z="2"
            site="https://www.zooniverse.org/"
            isMobile={isMobile}
          />
        </div>
      </section>
      <section className={classes('container', styles.toolbox)}>
        <h2 className="h2">My Toolbox</h2>
        <div className={styles['tools-cont']}>
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>React Native</li>
            <li>CSS Animations</li>
            <li>Three.js</li>
          </ul>
          <ul>
            <li>GSAP</li>
            <li>Next.js</li>
            <li>Headless CMS</li>
            <li>Enzyme</li>
            <li>Docker</li>
          </ul>
          <ul>
            <li>REST APIs</li>
            <li>Git Workflow</li>
            <li>Firebase</li>
            <li>Express.js</li>
          </ul>
        </div>
      </section>
      <div className={classes(styles.hero, styles['north-skyline'])} />
    </main>
  )
}

export default Homepage
