import Link from 'next/link'

const Navbar = () => (
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

export default Navbar
