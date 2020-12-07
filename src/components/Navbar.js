import styles from '../styles/components/navbar.module.scss'

export default () => (
  <header>
    <nav className={styles.navbar}>
        <a
          className={styles.linkedin}
          href="https://www.linkedin.com/in/delilahclement/"
          target="_blank"
        >
          <img src="/images/linkedin.svg" alt="Linked In Icon" />
        </a>
    </nav>
  </header>
)
