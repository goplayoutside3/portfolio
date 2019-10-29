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
        <Link href="/moodboard">
          <a>Moodboard</a>
        </Link>
      </li>
  </header>
)

export default Navbar
