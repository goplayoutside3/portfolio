import styles from '../styles/components/navbar.module.scss'

const Navbar = () => (
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

export default Navbar
