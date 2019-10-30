import React from 'react'
import Link from 'next/link'

const Navbar = () => (
  <header>
      <img src="/images/longboard.svg" className="icon" />
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
        <Link href="/community">
          <a>Community</a>
        </Link>
      </li>
  </header>
)
// Add Github, LinkedIn, Email
export default Navbar
