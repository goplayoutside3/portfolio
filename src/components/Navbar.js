import styles from '../styles/components/navbar.module.scss'

const Navbar = () => (
  <header>
    <nav className={styles.navbar}>
        <a
          className={styles.icon}
          href="https://www.linkedin.com/in/delilahclement"
          target="_blank"
        >
          <img src="/images/linkedin.svg" alt="Linked In Icon" />
        </a>
        <a
          className={styles.icon}
          href="https://github.com/goplayoutside3"
          target="_blank"
        >
          <img src="/images/github.svg" alt="Github Icon" />
        </a>
    </nav>
  </header>
)

export default Navbar
