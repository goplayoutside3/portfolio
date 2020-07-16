import styles from '../styles/layouts/home.module.scss'
import classes from 'classnames'
import { PageCurl } from '../components'

export default ({ isMobile }) => {
  return (
    <main id={styles.home}>
      <section className={classes(styles.hero, 'hero')}>
        <div className={styles['hero-copy']}>
          <h1>I'm Delilah</h1>
          <h2 className="h2">a front-end web developer</h2>
        </div>
      </section>
      <section className={classes(styles.work, 'container')}>
        <h2 className="h2">Professional Work</h2>
        <p className="h4">
          Select projects built as primary developer at{' '}
          <a href="https://www.reachcreative.com/" target="_blank">
            Reach Creative
          </a>
          , a Chicago-based design agency.
        </p>
        <div className={styles['projects-cont']}>
          <PageCurl
            image="/images/northface2.jpg"
            z="4"
            title="Rewind Nature"
            site="https://www.nationalgeographic.com/rewindnature/"
            isMobile={isMobile}
          />
          <PageCurl
            image="/images/mazda2.jpg"
            z="3"
            title="Inspiration in Every Mile"
            site="https://www.nationalgeographic.com/mazda/"
            isMobile={isMobile}
          />
          <PageCurl
            image="/images/maine2.jpg"
            z="2"
            title="What's In Your Pack?"
            site="https://www.nationalgeographic.com/whatsinyourpack/"
            isMobile={isMobile}
          />
        </div>
      </section>
      <div className={classes("hero", styles['north-skyline'])}/>
      <section className={classes("container", styles.toolbox)}>
        <h2 className="h2">My Toolbox</h2>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>React Native</li>
          <li>CSS Animations</li>
          <li>Three.js</li>
          <li>GSAP</li>
          <li>Firebase</li>
          <li>Prismic</li>
          <li>Adobe Illustrator</li>
          <li>Adobe Photoshop</li>
        </ul>
      </section>
    </main>
  )
}
