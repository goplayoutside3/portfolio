import Link from 'next/link'
import styles from '../styles/components/navbar.module.scss'

export default () => (
  <header>
    <nav>
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/work">
        <a>Work</a>
      </Link>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/delilahclement/" target="_blank">
        <img
          className="linkedin"
          src="/images/linkedin.svg"
          alt="Linked In Icon"
        />
      </a>
    </li>
    </nav>
  </header>
)
