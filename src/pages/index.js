import styles from '../styles/layouts/home.module.scss'
import classes from 'classnames'

export default () => {
  return (
    <main id={styles.home}>
      <section className={classes(styles.hero, 'hero')}>
        <img className={styles["hero-bg-desktop"]} src="/images/home-hero-desktop.svg" />
        <img className={styles["hero-bg-mobile"]} src="/images/home-hero-mobile.svg" />
        <div className={styles["hero-copy"]}>
          <h1>I'm Delilah</h1>
          <h2 className="h2">a front-end web developer</h2>
        </div>
      </section>
      <section>
        <p>
          I work at <a href="https://www.reachcreative.com/" target="_blank">Reach Creative</a>, a Chicago-based design agency.
        </p>
      </section>
    </main>
  )
}